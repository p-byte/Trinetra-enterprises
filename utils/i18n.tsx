"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "kn";

const translations: Record<string, string> = {
  "Overview": "ಅವಲೋಕನ",
  "Products": "ಉತ್ಪನ್ನಗಳು",
  "Brands": "ಬ್ರ್ಯಾಂಡ್‌ಗಳು",
  "Gallery": "ಗ್ಯಾಲರಿ",
  "Contact": "ಸಂಪರ್ಕ",
  "Call Now": "ಈಗ ಕರೆ ಮಾಡಿ",
  "N Durga Prasad": "ಎನ್ ದುರ್ಗಾ ಪ್ರಸಾದ್",
  "Wholesale & Retail Security, Lighting, Fire Safety and Electronics": "ಸುರಕ್ಷತೆ, ಲೈಟಿಂಗ್, ಅಗ್ನಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಹೋಲ್‌ಸೇಲ್ ಮತ್ತು ರಿಟೇಲ್",
  "Trusted Wholesale & Retail CCTV, Fire Safety & Technology Solutions": "ವಿಶ್ವಾಸಾರ್ಹ ಹೋಲ್‌ಸೇಲ್ ಮತ್ತು ರಿಟೇಲ್ CCTV, ಅಗ್ನಿ ಸುರಕ್ಷತೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳು",
  "Complete Security, Surveillance, Lighting, Fire Safety & Refurbished Laptop Solutions Under One Roof": "ಸುರಕ್ಷತೆ, ನಿಗಾವ್ಯವಸ್ಥೆ, ಲೈಟಿಂಗ್, ಅಗ್ನಿ ಸುರಕ್ಷತೆ ಮತ್ತು ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್ ಪರಿಹಾರಗಳು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ",
  "Contact on WhatsApp": "WhatsApp ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ",
  "View Products": "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
  "Get Quote": "ಕೋಟೇಶನ್ ಪಡೆಯಿರಿ",
  "Company Overview": "ಕಂಪನಿ ಅವಲೋಕನ",
  "Offline Store Trust With Enterprise-Grade Product Guidance": "ಆಫ್‌ಲೈನ್ ಅಂಗಡಿ ವಿಶ್ವಾಸ ಮತ್ತು ವೃತ್ತಿಪರ ಉತ್ಪನ್ನ ಮಾರ್ಗದರ್ಶನ",
  "Trinetra Enterprises is a trusted wholesale and retail supplier in Sindhanur for CCTV security systems, surveillance products, lighting solutions, fire safety equipment, electronics and refurbished laptops.": "ತ್ರಿನೇತ್ರ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ಸಿಂಧನೂರಿನಲ್ಲಿ CCTV ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆಗಳು, ನಿಗಾ ಉತ್ಪನ್ನಗಳು, ಲೈಟಿಂಗ್ ಪರಿಹಾರಗಳು, ಅಗ್ನಿ ಸುರಕ್ಷತಾ ಉಪಕರಣಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಹೋಲ್‌ಸೇಲ್ ಮತ್ತು ರಿಟೇಲ್ ಸರಬರಾಜುದಾರ.",
  "Complete security and technology products under one roof.": "ಸುರಕ್ಷತೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಉತ್ಪನ್ನಗಳು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
  "Led by N Durga Prasad, the business supports homeowners, retail shops, offices, institutions and contractors with genuine products, affordable pricing, customer support, security solutions expertise, lighting products, fire safety essentials and value-focused refurbished laptops.": "ಎನ್ ದುರ್ಗಾ ಪ್ರಸಾದ್ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ, ಈ ವ್ಯವಹಾರವು ಮನೆ ಮಾಲೀಕರು, ರಿಟೇಲ್ ಅಂಗಡಿಗಳು, ಕಚೇರಿಗಳು, ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕಾನ್ಟ್ರಾಕ್ಟರ್‌ಗಳಿಗೆ ನಿಜವಾದ ಉತ್ಪನ್ನಗಳು, ಕೈಗೆಟುಕುವ ಬೆಲೆ, ಗ್ರಾಹಕ ಬೆಂಬಲ, ಸುರಕ್ಷತಾ ಪರಿಹಾರಗಳ ಪರಿಣತಿ, ಲೈಟಿಂಗ್ ಉತ್ಪನ್ನಗಳು, ಅಗ್ನಿ ಸುರಕ್ಷತಾ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಮೌಲ್ಯಯುತ ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
  "Trusted wholesale & retail supplier": "ವಿಶ್ವಾಸಾರ್ಹ ಹೋಲ್‌ಸೇಲ್ ಮತ್ತು ರಿಟೇಲ್ ಸರಬರಾಜುದಾರ",
  "Offline store presence": "ಆಫ್‌ಲೈನ್ ಅಂಗಡಿ ಲಭ್ಯತೆ",
  "Genuine products": "ನಿಜವಾದ ಉತ್ಪನ್ನಗಳು",
  "Affordable pricing": "ಕೈಗೆಟುಕುವ ಬೆಲೆ",
  "Customer support": "ಗ್ರಾಹಕ ಬೆಂಬಲ",
  "Security solutions expertise": "ಸುರಕ್ಷತಾ ಪರಿಹಾರಗಳ ಪರಿಣತಿ",
  "Happy Customers": "ಸಂತೋಷದ ಗ್ರಾಹಕರು",
  "Products Available": "ಲಭ್ಯ ಉತ್ಪನ್ನಗಳು",
  "Product Categories": "ಉತ್ಪನ್ನ ವರ್ಗಗಳು",
  "Years of Service": "ಸೇವೆಯ ವರ್ಷಗಳು",
  "Product Range": "ಉತ್ಪನ್ನ ಶ್ರೇಣಿ",
  "Wholesale and Retail Product Categories": "ಹೋಲ್‌ಸೇಲ್ ಮತ್ತು ರಿಟೇಲ್ ಉತ್ಪನ್ನ ವರ್ಗಗಳು",
  "Search products, filter by category and open previews to send a quick enquiry.": "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ, ವರ್ಗದಂತೆ ಫಿಲ್ಟರ್ ಮಾಡಿ ಮತ್ತು ತ್ವರಿತ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ.",
  "Search CCTV, fire safety, lights, laptops...": "CCTV, ಅಗ್ನಿ ಸುರಕ್ಷತೆ, ಲೈಟ್ಸ್, ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳನ್ನು ಹುಡುಕಿ...",
  "All": "ಎಲ್ಲಾ",
  "Enquire Now": "ಈಗ ವಿಚಾರಿಸಿ",
  "Send Enquiry on WhatsApp": "WhatsApp ನಲ್ಲಿ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
  "Editable Brand Cards": "ಸಂಪಾದಿಸಬಹುದಾದ ಬ್ರ್ಯಾಂಡ್ ಕಾರ್ಡ್‌ಗಳು",
  "Popular security, electronics and laptop brands represented as local editable cards.": "ಸುರಕ್ಷತೆ, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಲ್ಯಾಪ್‌ಟಾಪ್ ಬ್ರ್ಯಾಂಡ್‌ಗಳನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಸಂಪಾದಿಸಬಹುದಾದ ಕಾರ್ಡ್‌ಗಳಾಗಿ ತೋರಿಸಲಾಗಿದೆ.",
  "Genuine Products": "ನಿಜವಾದ ಉತ್ಪನ್ನಗಳು",
  "Wholesale Pricing": "ಹೋಲ್‌ಸೇಲ್ ಬೆಲೆ",
  "Retail Availability": "ರಿಟೇಲ್ ಲಭ್ಯತೆ",
  "Trusted Supplier": "ವಿಶ್ವಾಸಾರ್ಹ ಸರಬರಾಜುದಾರ",
  "Expert Guidance": "ಪರಿಣತ ಮಾರ್ಗದರ್ಶನ",
  "Fast Service": "ವೇಗದ ಸೇವೆ",
  "Store, Product and Installation Gallery": "ಅಂಗಡಿ, ಉತ್ಪನ್ನ ಮತ್ತು ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಗ್ಯಾಲರಿ",
  "Editable local gallery placeholders for CCTV installations, products, fire safety systems, lighting and refurbished laptops.": "CCTV ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳು, ಉತ್ಪನ್ನಗಳು, ಅಗ್ನಿ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆಗಳು, ಲೈಟಿಂಗ್ ಮತ್ತು ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳ ಸ್ಥಳೀಯ ಗ್ಯಾಲರಿ.",
  "CCTV installations": "CCTV ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳು",
  "CCTV products": "CCTV ಉತ್ಪನ್ನಗಳು",
  "Fire extinguishers": "ಫೈರ್ ಎಕ್ಸ್ಟಿಂಗ್ವಿಷರ್‌ಗಳು",
  "LED lights": "LED ಲೈಟ್ಸ್",
  "Solar lights": "ಸೋಲಾರ್ ಲೈಟ್ಸ್",
  "Refurbished laptops": "ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು",
  "Reviews": "ವಿಮರ್ಶೆಗಳು",
  "Customer Testimonials": "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು",
  "Modern review cards for business feedback, lead trust and local credibility.": "ವ್ಯವಹಾರ ವಿಶ್ವಾಸ ಮತ್ತು ಸ್ಥಳೀಯ ನಂಬಿಕೆಗೆ ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು.",
  "Get a Quote or Visit the Store": "ಕೋಟೇಶನ್ ಪಡೆಯಿರಿ ಅಥವಾ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ",
  "Lead-generation contact section with call, WhatsApp, email, Instagram and map placeholder.": "ಕರೆ, WhatsApp, ಇಮೇಲ್, Instagram ಮತ್ತು ಮ್ಯಾಪ್ ಸಂಪರ್ಕ ವಿಭಾಗ.",
  "Business timings placeholder: 9:30 AM to 8:30 PM": "ವ್ಯವಹಾರ ಸಮಯ: ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ ರಾತ್ರಿ 8:30 ರವರೆಗೆ",
  "Open Store Location": "ಅಂಗಡಿ ಸ್ಥಳ ತೆರೆಯಿರಿ",
  "View Trinetra Enterprises on Google Maps": "Google Maps ನಲ್ಲಿ ತ್ರಿನೇತ್ರ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ನೋಡಿ",
  "Your name": "ನಿಮ್ಮ ಹೆಸರು",
  "Phone number": "ಫೋನ್ ಸಂಖ್ಯೆ",
  "Product requirement": "ಉತ್ಪನ್ನ ಅವಶ್ಯಕತೆ",
  "Message": "ಸಂದೇಶ",
  "Submit via Google Form": "Google Form ಮೂಲಕ ಸಲ್ಲಿಸಿ",
  "Google Form responses can be linked to Google Sheets from the Google Forms Responses tab.": "Google Form ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು Responses ಟ್ಯಾಬ್‌ನಿಂದ Google Sheets ಗೆ ಲಿಂಕ್ ಮಾಡಬಹುದು.",
  "Quick Links": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
  "Owned by": "ಮಾಲೀಕರು",
  "All rights reserved.": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  "CCTV Cameras": "CCTV ಕ್ಯಾಮೆರಾಗಳು",
  "Bullet Cameras": "ಬುಲೆಟ್ ಕ್ಯಾಮೆರಾಗಳು",
  "Dome Cameras": "ಡೋಮ್ ಕ್ಯಾಮೆರಾಗಳು",
  "DVR/NVR Systems": "DVR/NVR ವ್ಯವಸ್ಥೆಗಳು",
  "IP Cameras": "IP ಕ್ಯಾಮೆರಾಗಳು",
  "WiFi Cameras": "WiFi ಕ್ಯಾಮೆರಾಗಳು",
  "CCTV Accessories": "CCTV ಆಕ್ಸೆಸರಿಗಳು",
  "Security Systems": "ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆಗಳು",
  "LED Lights": "LED ಲೈಟ್ಸ್",
  "Solar Lights": "ಸೋಲಾರ್ ಲೈಟ್ಸ್",
  "Emergency Lights": "ಎಮರ್ಜೆನ್ಸಿ ಲೈಟ್ಸ್",
  "Fire Extinguishers": "ಫೈರ್ ಎಕ್ಸ್ಟಿಂಗ್ವಿಷರ್‌ಗಳು",
  "Fire Safety Equipment": "ಅಗ್ನಿ ಸುರಕ್ಷತಾ ಉಪಕರಣಗಳು",
  "Smoke Detectors": "ಸ್ಮೋಕ್ ಡಿಟೆಕ್ಟರ್‌ಗಳು",
  "Safety Alarms": "ಸುರಕ್ಷತಾ ಅಲಾರಂಗಳು",
  "Power Supplies": "ಪವರ್ ಸಪ್ಲೈಗಳು",
  "Cables & Connectors": "ಕೇಬಲ್‌ಗಳು ಮತ್ತು ಕನೆಕ್ಟರ್‌ಗಳು",
  "Installation Accessories": "ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಆಕ್ಸೆಸರಿಗಳು",
  "Second-Hand Laptops": "ಸೆಕೆಂಡ್ ಹ್ಯಾಂಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು",
  "Refurbished Dell Laptops": "ರಿಫರ್ಬಿಷ್ಡ್ Dell ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು",
  "Refurbished HP Laptops": "ರಿಫರ್ಬಿಷ್ಡ್ HP ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು",
  "Refurbished Lenovo Laptops": "ರಿಫರ್ಬಿಷ್ಡ್ Lenovo ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು"
  ,"CCTV": "CCTV",
  "Recorders": "ರೆಕಾರ್ಡರ್‌ಗಳು",
  "Accessories": "ಆಕ್ಸೆಸರಿಗಳು",
  "Security": "ಸುರಕ್ಷತೆ",
  "Lighting": "ಲೈಟಿಂಗ್",
  "Fire Safety": "ಅಗ್ನಿ ಸುರಕ್ಷತೆ",
  "Electronics": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್",
  "Laptops": "ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು",
  "Surveillance": "ನಿಗಾವ್ಯವಸ್ಥೆ",
  "Outdoor": "ಹೊರಾಂಗಣ",
  "Indoor": "ಒಳಾಂಗಣ",
  "Storage": "ಸ್ಟೋರೇಜ್",
  "Network": "ನೆಟ್‌ವರ್ಕ್",
  "Wireless": "ವೈರ್‌ಲೆಸ್",
  "Install": "ಇನ್‌ಸ್ಟಾಲ್",
  "Protection": "ರಕ್ಷಣೆ",
  "Energy Save": "ಎನರ್ಜಿ ಸೇವ್",
  "Backup": "ಬ್ಯಾಕಪ್",
  "Safety": "ಸುರಕ್ಷತೆ",
  "Certified": "ಪ್ರಮಾಣಿತ",
  "Alert": "ಎಚ್ಚರಿಕೆ",
  "Warning": "ವಾರ್ನಿಂಗ್",
  "Reliable": "ವಿಶ್ವಾಸಾರ್ಹ",
  "Wiring": "ವೈರಿಂಗ್",
  "Tools": "ಟೂಲ್ಸ್",
  "Value": "ಮೌಲ್ಯ"
};

const descriptionMap: Record<string, string> = {
  "Reliable indoor and outdoor CCTV solutions for homes, shops, offices, warehouses and institutions.": "ಮನೆ, ಅಂಗಡಿ, ಕಚೇರಿ, ಗೋದಾಮು ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗೆ ಒಳಾಂಗಣ ಹಾಗೂ ಹೊರಾಂಗಣ CCTV ಪರಿಹಾರಗಳು.",
  "Long-range weather-ready bullet cameras for gates, parking areas, streets and commercial premises.": "ಗೇಟ್, ಪಾರ್ಕಿಂಗ್, ರಸ್ತೆ ಮತ್ತು ವಾಣಿಜ್ಯ ಸ್ಥಳಗಳಿಗೆ ದೀರ್ಘ ವ್ಯಾಪ್ತಿಯ ಬುಲೆಟ್ ಕ್ಯಾಮೆರಾಗಳು.",
  "Sleek vandal-resistant dome cameras for offices, retail counters, corridors and reception zones.": "ಕಚೇರಿ, ರಿಟೇಲ್ ಕೌಂಟರ್, ಕಾರಿಡಾರ್ ಮತ್ತು ರಿಸೆಪ್ಷನ್ ಪ್ರದೇಶಗಳಿಗೆ ಡೋಮ್ ಕ್ಯಾಮೆರಾಗಳು.",
  "Multi-channel DVR and NVR systems with dependable recording, playback and remote viewing support.": "ರೆಕಾರ್ಡಿಂಗ್, ಪ್ಲೇಬ್ಯಾಕ್ ಮತ್ತು ರಿಮೋಟ್ ವೀಕ್ಷಣೆಯೊಂದಿಗೆ DVR/NVR ವ್ಯವಸ್ಥೆಗಳು.",
  "Smart network cameras with sharp image quality for professional security installations.": "ವೃತ್ತಿಪರ ಸುರಕ್ಷತಾ ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ ಉತ್ತಮ ಚಿತ್ರ ಗುಣಮಟ್ಟದ ನೆಟ್‌ವರ್ಕ್ ಕ್ಯಾಮೆರಾಗಳು.",
  "Easy wireless monitoring options for homes, stores and small offices.": "ಮನೆ, ಅಂಗಡಿ ಮತ್ತು ಸಣ್ಣ ಕಚೇರಿಗಳಿಗೆ ಸುಲಭ ವೈರ್‌ಲೆಸ್ ಮಾನಿಟರಿಂಗ್.",
  "Adapters, junction boxes, connectors, mounts, hard disks and service essentials.": "ಅಡಾಪ್ಟರ್‌ಗಳು, ಜಂಕ್ಷನ್ ಬಾಕ್ಸ್‌ಗಳು, ಕನೆಕ್ಟರ್‌ಗಳು, ಮೌಂಟ್‌ಗಳು, ಹಾರ್ಡ್ ಡಿಸ್ಕ್‌ಗಳು ಮತ್ತು ಸೇವಾ ಸಾಮಗ್ರಿಗಳು.",
  "Integrated security products for safer residential, retail and enterprise spaces.": "ಮನೆ, ರಿಟೇಲ್ ಮತ್ತು ವ್ಯಾಪಾರ ಸ್ಥಳಗಳಿಗೆ ಸಮಗ್ರ ಸುರಕ್ಷತಾ ಉತ್ಪನ್ನಗಳು.",
  "Bright and efficient LED lighting products for commercial and residential use.": "ವಾಣಿಜ್ಯ ಮತ್ತು ಮನೆ ಬಳಕೆಗೆ ಪ್ರಕಾಶಮಾನ LED ಲೈಟಿಂಗ್ ಉತ್ಪನ್ನಗಳು.",
  "Solar lighting solutions for outdoor security, pathways, shop fronts and farms.": "ಹೊರಾಂಗಣ ಸುರಕ್ಷತೆ, ದಾರಿ, ಅಂಗಡಿ ಮುಂಭಾಗ ಮತ್ತು ಕೃಷಿ ಬಳಕೆಗೆ ಸೋಲಾರ್ ಲೈಟಿಂಗ್.",
  "Emergency and backup lights for homes, offices, shops and public spaces.": "ಮನೆ, ಕಚೇರಿ, ಅಂಗಡಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಿಗೆ ಎಮರ್ಜೆನ್ಸಿ ಮತ್ತು ಬ್ಯಾಕಪ್ ಲೈಟ್ಸ್.",
  "Fire extinguishers for shops, buildings, offices, vehicles and industrial safety needs.": "ಅಂಗಡಿ, ಕಟ್ಟಡ, ಕಚೇರಿ, ವಾಹನ ಮತ್ತು ಕೈಗಾರಿಕಾ ಸುರಕ್ಷತೆಗೆ ಫೈರ್ ಎಕ್ಸ್ಟಿಂಗ್ವಿಷರ್‌ಗಳು.",
  "Essential fire safety products for prevention, compliance and emergency readiness.": "ತಡೆಗಟ್ಟುವಿಕೆ, ನಿಯಮ ಪಾಲನೆ ಮತ್ತು ತುರ್ತು ಸಿದ್ಧತೆಗೆ ಅಗ್ನಿ ಸುರಕ್ಷತಾ ಉತ್ಪನ್ನಗಳು.",
  "Sensitive smoke detection products for early warning and building safety.": "ಮುನ್ನೆಚ್ಚರಿಕೆ ಮತ್ತು ಕಟ್ಟಡ ಸುರಕ್ಷತೆಗೆ ಸ್ಮೋಕ್ ಡಿಟೆಕ್ಷನ್ ಉತ್ಪನ್ನಗಳು.",
  "Audible safety alarms and alert systems for commercial and residential spaces.": "ವಾಣಿಜ್ಯ ಮತ್ತು ಮನೆ ಸ್ಥಳಗಳಿಗೆ ಸುರಕ್ಷತಾ ಅಲಾರಂ ಹಾಗೂ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆಗಳು.",
  "Power adapters and SMPS units for cameras, lights and electronics installations.": "ಕ್ಯಾಮೆರಾ, ಲೈಟ್ಸ್ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ ಪವರ್ ಅಡಾಪ್ಟರ್ ಮತ್ತು SMPS.",
  "Quality cables, connectors and installation wiring for stable security systems.": "ಸ್ಥಿರ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಉತ್ತಮ ಕೇಬಲ್‌ಗಳು, ಕನೆಕ್ಟರ್‌ಗಳು ಮತ್ತು ವೈರಿಂಗ್.",
  "Installation accessories for fast, neat and durable on-site deployments.": "ವೇಗವಾದ, ಸ್ವಚ್ಛ ಮತ್ತು ಬಾಳಿಕೆಬರುವ ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗೆ ಅಗತ್ಯ ಆಕ್ಸೆಸರಿಗಳು.",
  "Budget-friendly inspected laptops for students, offices and business users.": "ವಿದ್ಯಾರ್ಥಿ, ಕಚೇರಿ ಮತ್ತು ವ್ಯಾಪಾರ ಬಳಕೆದಾರರಿಗೆ ಪರಿಶೀಲಿಸಿದ ಕಡಿಮೆ ಬೆಲೆಯ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು.",
  "Professionally checked Dell laptops with practical configurations and affordable pricing.": "ಪರಿಶೀಲಿಸಿದ Dell ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು, ಉಪಯುಕ್ತ ಕಾನ್ಫಿಗರೇಶನ್ ಮತ್ತು ಕೈಗೆಟುಕುವ ಬೆಲೆಯಲ್ಲಿ.",
  "Reliable refurbished HP laptops for daily work, learning and business operations.": "ದೈನಂದಿನ ಕೆಲಸ, ಕಲಿಕೆ ಮತ್ತು ವ್ಯವಹಾರಕ್ಕೆ ವಿಶ್ವಾಸಾರ್ಹ HP ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು.",
  "Durable Lenovo refurbished laptops for office, education and productivity needs.": "ಕಚೇರಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಉತ್ಪಾದಕತೆಗಾಗಿ ಬಾಳಿಕೆಬರುವ Lenovo ರಿಫರ್ಬಿಷ್ಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು."
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (text: string) => (lang === "kn" ? translations[text] || descriptionMap[text] || text : text)
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
