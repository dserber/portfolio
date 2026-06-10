"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const honeypot = formData.get("contact_website");

  // Silently reject bot/spam submissions that fill out the honeypot
  if (honeypot) {
    return {
      data: { id: "spam-prevented" },
    };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const htmlContent = await render(
      React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    );

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dserber@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      html: htmlContent,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
