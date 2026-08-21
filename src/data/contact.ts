// Single source of truth for company contact info & WhatsApp links.
// Consumed by products.ts, Footer, LocationSection, FaqSection, contact page.

export const WHATSAPP_NUMBER = '6287748514337';
export const PHONE_TEL = '+6287748514337';
export const PHONE_DISPLAY = '0877-4851-4337';

// Google Maps Embed URL (BENGKEL GITAR INDONESIA)
export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.574577017852!2d106.703123!3d-6.175249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f95c8954b2c1%3A0x95c1f01eb089f0dc!2sBENGKEL%20GITAR%20INDONESIA!5e0!3m2!1sid!2sid!4v1723874521';

export const MAP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=-6.175249,106.703123&destination_place_id=BENGKEL+GITAR+INDONESIA';

/** Build a wa.me link; pass a message to pre-fill the chat text. */
export function getWhatsAppUrl(message?: string): string {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
