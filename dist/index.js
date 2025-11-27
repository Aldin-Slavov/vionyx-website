var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// server/index.ts
import express2 from "express";
import multer from "multer";
import path3 from "path";
import fs2 from "fs";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  services;
  clients;
  contactRequests;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.services = /* @__PURE__ */ new Map();
    this.clients = /* @__PURE__ */ new Map();
    this.contactRequests = /* @__PURE__ */ new Map();
    this.initializeServices();
    this.initializeClients();
  }
  initializeServices() {
    const defaultServices = [
      {
        id: randomUUID(),
        title: "\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
        titleEn: "Event Security",
        slug: "okhrana-na-meropriyatia",
        description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u043D\u0430 \u043E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0441\u043F\u043E\u0440\u0442\u043D\u0438 \u0441\u044A\u0431\u0438\u0442\u0438\u044F, \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u0438, \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u0438 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
        descriptionEn: "Professional security for sports events, concerts, festivals and corporate events",
        image: "/images/services/security-events.jpg",
        icon: "fas fa-calendar-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u041A\u043E\u043D\u0442\u0440\u043E\u043B \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u0430", "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0442\u044A\u043B\u043F\u0438", "\u0421\u043F\u0435\u0448\u043D\u0430 \u0440\u0435\u0430\u043A\u0446\u0438\u044F", "\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F \u0441 \u0432\u043B\u0430\u0441\u0442\u0438\u0442\u0435"],
        featuresEn: ["Security inspection", "Access control", "Crowd management", "Emergency response", "Authority coordination"],
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        title: "\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043D\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u0438\u0446\u0430",
        titleEn: "Property Security for Individuals and Legal Entities",
        slug: "okhrana-na-imushtestvo",
        description: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u043E\u0442\u043E \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0441 \u043C\u043E\u0434\u0435\u0440\u043D\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B",
        descriptionEn: "Protection of personal and corporate property with modern technologies and trained personnel",
        image: "/images/services/" + encodeURIComponent("securyty-prop.jpg"),
        icon: "fas fa-shield-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", "\u041A\u043E\u043D\u0442\u0440\u043E\u043B \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u0430", "\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0430\u043B\u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430"],
        featuresEn: ["Security inspection", "24/7 security", "Video surveillance", "Access control", "Perimeter protection"],
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        title: "\u0421\u0438\u0433\u043D\u0430\u043B\u043D\u043E-\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u0430 \u0434\u0435\u0439\u043D\u043E\u0441\u0442",
        titleEn: "Alarm and Security Systems",
        slug: "signalno-okhranitelna-deynost",
        description: "\u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u043D\u0435, \u043F\u043E\u0434\u0434\u0440\u044A\u0436\u043A\u0430 ,\u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u043D\u0438,\u0430\u043B\u0430\u0440\u043C\u0435\u043D\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u0440\u0435\u0430\u043A\u0446\u0438\u044F \u0441 \u0430\u0432\u0442\u043E\u043F\u0430\u0442\u0440\u0443\u043B",
        descriptionEn: "Installation, maintenance and monitoring of alarm systems and security devices",
        image: "/images/services/" + encodeURIComponent("\u0441\u043E\u0434.jpg"),
        icon: "fas fa-bell",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433", "\u0411\u044A\u0440\u0437\u0430 \u0440\u0435\u0430\u043A\u0446\u0438\u044F", "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430 \u043F\u043E\u0434\u0434\u0440\u044A\u0436\u043A\u0430", "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441\u044A\u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u0438", "\u0432\u0438\u0434\u0435\u043E \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"],
        featuresEn: ["Security inspection", "Centralized monitoring", "Quick response", "Technical support", "System integration"],
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        title: "\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u043E\u0431\u0435\u043A\u0442\u0438 \u2013 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u0438 \u0438\u043C\u043E\u0442\u0438",
        titleEn: "Real Estate Security",
        slug: "okhrana-na-obekti-nedvizhimi",
        description: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0436\u0438\u043B\u0438\u0449\u043D\u0438 \u0438 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u0441\u0433\u0440\u0430\u0434\u0438, \u0441\u043A\u043B\u0430\u0434\u043E\u0432\u0435 \u0438 \u043F\u0440\u043E\u043C\u0438\u0448\u043B\u0435\u043D\u0438 \u043E\u0431\u0435\u043A\u0442\u0438",
        descriptionEn: "Specialized security for residential and commercial buildings, warehouses and industrial facilities",
        image: "/images/services/" + encodeURIComponent("\u043E\u0445\u0440\u0430\u043D\u0430\u2013\u0441\u0433\u0440\u0430\u0434\u0438.jpg"),
        icon: "fas fa-building",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0430 \u043E\u0445\u0440\u0430\u043D\u0430", "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430", "\u041F\u0430\u0442\u0440\u0443\u043B\u0438\u0440\u0430\u043D\u0435", "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442"],
        featuresEn: ["Security inspection", "Physical security", "Electronic protection", "Patrolling", "Reporting"],
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        title: "\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0430 \u0441\u0435\u043B\u0441\u043A\u043E\u0441\u0442\u043E\u043F\u0430\u043D\u0441\u043A\u043E \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E",
        titleEn: "Agricultural Property Security",
        slug: "okhrana-na-selskostopansko-imushtestvo",
        description: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0437\u0435\u043C\u0435\u0434\u0435\u043B\u0441\u043A\u0438 \u0437\u0435\u043C\u0438, \u043C\u0430\u0448\u0438\u043D\u0438, \u0441\u043A\u043B\u0430\u0434\u043E\u0432\u0435 \u0438 \u0441\u0435\u043B\u0441\u043A\u043E\u0441\u0442\u043E\u043F\u0430\u043D\u0441\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
        descriptionEn: "Protection of agricultural land, machinery, warehouses and agricultural products",
        image: "/images/services/" + encodeURIComponent("\u043E\u0445\u0440\u0430\u043D\u0430\u2013\u0437\u0435\u043C\u0435\u0434\u0435\u043B\u0441\u043A\u0430.jpg"),
        icon: "fas fa-tractor",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0430 \u043E\u0445\u0440\u0430\u043D\u0430", "\u041C\u043E\u0431\u0438\u043B\u043D\u0438 \u043F\u0430\u0442\u0440\u0443\u043B\u0438", "\u0417\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0430", "\u0421\u0435\u0437\u043E\u043D\u043D\u043E \u043F\u043E\u043A\u0440\u0438\u0442\u0438\u0435"],
        featuresEn: ["Security inspection", "Perimeter security", "Mobile patrols", "Equipment protection", "Seasonal coverage"],
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        title: "\u0421\u0442\u044E\u0430\u0440\u0434\u0438\u043D\u0433 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B \u0431\u0438\u043B\u0435\u0442\u0438",
        titleEn: "Stewarding and Ticket Control",
        slug: "styuarding-kontrol-bileti",
        description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u0441\u0442\u044E\u0430\u0440\u0434\u0438 \u0437\u0430 \u0441\u043F\u043E\u0440\u0442\u043D\u0438 \u0438 \u043A\u0443\u043B\u0442\u0443\u0440\u043D\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F , \u043A\u043E\u043D\u0442\u0440\u043E\u043B \u043D\u0430 \u0431\u0438\u043B\u0435\u0442\u0438",
        descriptionEn: "Professional stewards for sports and cultural events with ticket control",
        image: "/images/services/" + encodeURIComponent("\u0441\u0442\u044E\u0430\u0440\u0434.jpg"),
        icon: "fas fa-ticket-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435", "\u041A\u043E\u043D\u0442\u0440\u043E\u043B \u0431\u0438\u043B\u0435\u0442\u0438", "\u041D\u0430\u0441\u043E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430", "\u0421\u043F\u0435\u0448\u043D\u0430 \u0435\u0432\u0430\u043A\u0443\u0430\u0446\u0438\u044F", "\u041E\u0431\u0441\u043B\u0443\u0436\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0438"],
        featuresEn: ["Security inspection", "Ticket control", "Crowd guidance", "Emergency evacuation", "Customer service"],
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    defaultServices.forEach((service) => {
      this.services.set(service.slug, service);
    });
  }
  initializeClients() {
    const defaultClients = [
      {
        id: randomUUID(),
        name: '128 \u0421\u0423 "\u0410\u043B\u0431\u0435\u0440\u0442 \u0410\u0439\u043D\u0449\u0430\u0439\u043D"',
        nameEn: '128th Secondary School "Albert Einstein"',
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '"\u0410\u0420\u0422\u0412\u0415\u041D\u0422" \u041E\u041E\u0414',
        nameEn: '"ARTVENT" Ltd.',
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '\u041D\u0427 "\u0421\u0432\u0435\u0442\u043B\u0438\u043D\u0430 1940"',
        nameEn: 'Cultural Community Center "Svetlina 1940"',
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '\u041C\u043B\u0430\u0434\u0435\u0436\u043A\u0438 \u0441\u043F\u043E\u0440\u0442\u0435\u043D \u043A\u043B\u0443\u0431 "\u041F\u0430\u0437\u0430\u0440\u0434\u0436\u0438\u043A \u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430"',
        nameEn: 'Youth Sports Club "Pazardzhik Sports"',
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0422\u0415\u0410\u0422\u0420\u0410\u041B\u041D\u041E - \u041C\u0423\u0417\u0418\u041A\u0410\u041B\u0415\u041D \u041F\u0420\u041E\u0414\u0423\u0426\u0415\u041D\u0422\u0421\u041A\u0418 \u0426\u0415\u041D\u0422\u042A\u0420 \u0412\u0410\u0420\u041D\u0410",
        nameEn: "Varna Theatre and Music Production Center",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0414\u0415\u041B\u041E\u0419\u0422 \u0411\u042A\u041B\u0413\u0410\u0420\u0418\u042F \u0415\u041E\u041E\u0414",
        nameEn: "Deloitte Bulgaria Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "SB TECHNOLOGIES INC",
        nameEn: "SB Technologies Inc.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '\u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F "\u041C\u0435\u0442\u0430\u0430\u0440\u0442"',
        nameEn: "Metaart Foundation",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0424\u043B\u0435\u0448\u0431\u043E\u0443\u043D \u0415\u041E\u041E\u0414",
        nameEn: "Flashbone Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0418\u041D\u0421\u0422\u0418\u0422\u0423\u0422 \u041F\u041E \u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u0415\u0422\u041E",
        nameEn: "Institute of Education",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      // New clients added
      {
        id: randomUUID(),
        name: "\u0410\u0432\u0442\u043E \u0412\u0430\u0433\u043D\u0435\u0440 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u041E\u041E\u0414",
        nameEn: "Auto Wagner Bulgaria Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '\u0427\u0421\u0423 "\u041F\u0440\u043E\u0444\u0435\u0441\u043E\u0440 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0420\u0430\u0439\u043D\u043E\u0432"',
        nameEn: 'Private High School "Professor Nikolay Rainov"',
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u043E \u0413\u0440\u0443\u043F \u041E\u041E\u0414",
        nameEn: "Fantastico Group Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0411\u0413 \u0422\u0421\u0426 \u0413\u0440\u0443\u043F \u041E\u041E\u0414",
        nameEn: "BG TSC Group Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0422\u0414\u0411 \u041F\u043B\u0435\u0439 \u041E\u041E\u0414",
        nameEn: "TDB Play Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: '\u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F "\u041D\u0430\u0448\u0438\u044F\u0442 \u0434\u043E\u043C \u0435 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F"',
        nameEn: "Our Home Is Bulgaria Foundation",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u041D\u044E \u0415\u0432\u0435\u043D\u0442\u0438\u043A \u0410\u0432\u0435\u043D\u0442\u0443\u0440\u0430 \u041E\u041E\u0414",
        nameEn: "New Eventic Aventura Ltd.",
        logo: null,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    defaultClients.forEach((client) => {
      this.clients.set(client.id, client);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getServices() {
    return Array.from(this.services.values());
  }
  async getService(slug) {
    return this.services.get(slug);
  }
  async createService(insertService) {
    const id = randomUUID();
    const service = {
      ...insertService,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      fullDescription: insertService.fullDescription || null,
      features: insertService.features || null,
      featuresEn: insertService.featuresEn || null
    };
    this.services.set(service.slug, service);
    return service;
  }
  async getClients() {
    return Array.from(this.clients.values());
  }
  async createClient(insertClient) {
    const id = randomUUID();
    const client = {
      ...insertClient,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      logo: insertClient.logo || null,
      testimonial: insertClient.testimonial || null,
      contactPerson: insertClient.contactPerson || null,
      position: insertClient.position || null
    };
    this.clients.set(id, client);
    return client;
  }
  async createContactRequest(insertRequest) {
    const id = randomUUID();
    const request = {
      ...insertRequest,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactRequests.set(id, request);
    return request;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleEn: text("title_en"),
  // Може да е NULL в DB
  slug: text("slug").notNull(),
  description: text("description").notNull(),
  descriptionEn: text("description_en"),
  // Може да е NULL в DB
  image: text("image").notNull(),
  icon: text("icon").notNull(),
  priceFrom: integer("price_from").notNull(),
  priceUnit: text("price_unit").notNull(),
  priceUnitEn: text("price_unit_en"),
  // Може да е NULL в DB
  fullDescription: text("full_description"),
  // Може да е NULL в DB
  features: json("features"),
  // за масиви, може да е NULL
  featuresEn: json("features_en"),
  // за масиви, може да е NULL
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var clients = pgTable("clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  nameEn: text("name_en"),
  // Може да е NULL в DB
  logo: text("logo"),
  // Може да е NULL в DB
  testimonial: text("testimonial"),
  // Може да е NULL в DB
  testimonialEn: text("testimonial_en"),
  // Може да е NULL в DB
  contactPerson: text("contact_person"),
  // Може да е NULL в DB
  contactPersonEn: text("contact_person_en"),
  // Може да е NULL в DB
  position: text("position"),
  // Може да е NULL в DB
  positionEn: text("position_en"),
  // Може да е NULL в DB
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertServiceSchema = createInsertSchema(services).omit({
  id: true,
  createdAt: true
});
var insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  createdAt: true
});
var insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/services", async (req, res) => {
    try {
      const services2 = await storage.getServices();
      res.json(services2);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/services/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const service = await storage.getService(slug);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/clients", async (req, res) => {
    try {
      const clients2 = await storage.getClients();
      res.json(clients2);
    } catch (error) {
      console.error("Error fetching clients:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.status(201).json(contactRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      console.error("Error creating contact request:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/download/minors-declaration", (req, res) => {
    const path4 = __require("path");
    const filePath = path4.join(process.cwd(), "public", "downloads", "deklaracia-ZZD.doc");
    res.setHeader("Content-Disposition", 'attachment; filename="deklaracia-ZZD.doc"');
    res.setHeader("Content-Type", "application/msword");
    res.sendFile(filePath);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.static("public"));
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/downloads", express2.static("public/downloads"));
var uploadDir = path3.join(process.cwd(), "uploads");
if (!fs2.existsSync(uploadDir)) {
  fs2.mkdirSync(uploadDir, { recursive: true });
}
var transliterate = (str) => {
  const cyrillicToLatin = {
    "\u0430": "a",
    "\u0431": "b",
    "\u0432": "v",
    "\u0433": "g",
    "\u0434": "d",
    "\u0435": "e",
    "\u0436": "zh",
    "\u0437": "z",
    "\u0438": "i",
    "\u0439": "y",
    "\u043A": "k",
    "\u043B": "l",
    "\u043C": "m",
    "\u043D": "n",
    "\u043E": "o",
    "\u043F": "p",
    "\u0440": "r",
    "\u0441": "s",
    "\u0442": "t",
    "\u0443": "u",
    "\u0444": "f",
    "\u0445": "h",
    "\u0446": "ts",
    "\u0447": "ch",
    "\u0448": "sh",
    "\u0449": "sht",
    "\u044A": "a",
    "\u044C": "y",
    "\u044E": "yu",
    "\u044F": "ya",
    "\u0410": "A",
    "\u0411": "B",
    "\u0412": "V",
    "\u0413": "G",
    "\u0414": "D",
    "\u0415": "E",
    "\u0416": "Zh",
    "\u0417": "Z",
    "\u0418": "I",
    "\u0419": "Y",
    "\u041A": "K",
    "\u041B": "L",
    "\u041C": "M",
    "\u041D": "N",
    "\u041E": "O",
    "\u041F": "P",
    "\u0420": "R",
    "\u0421": "S",
    "\u0422": "T",
    "\u0423": "U",
    "\u0424": "F",
    "\u0425": "H",
    "\u0426": "Ts",
    "\u0427": "Ch",
    "\u0428": "Sh",
    "\u0429": "Sht",
    "\u042A": "A",
    "\u042C": "Y",
    "\u042E": "Yu",
    "\u042F": "Ya"
  };
  return str.replace(/[^\s\w]/g, (char) => cyrillicToLatin[char] || char).replace(/\s+/g, "_");
};
var storage2 = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    const timestamp2 = Date.now();
    const uniqueSuffix = timestamp2 + "-" + Math.round(Math.random() * 1e9);
    const originalNameWithoutExt = path3.parse(file.originalname).name;
    const safeOriginalName = transliterate(originalNameWithoutExt);
    const fileExtension = path3.extname(file.originalname);
    cb(null, `cv-${safeOriginalName}-${timestamp2}-${uniqueSuffix}${fileExtension}`);
  }
});
var upload = multer({
  storage: storage2,
  // Можете да добавите филтри за файлове (напр. само PDF, DOC, DOCX) тук ако е нужно
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      cb(null, true);
    } else {
      cb(new Error("\u041D\u0435\u043F\u043E\u0437\u0432\u043E\u043B\u0435\u043D \u0442\u0438\u043F \u0444\u0430\u0439\u043B! \u041C\u043E\u043B\u044F, \u043F\u0440\u0438\u043A\u0430\u0447\u0435\u0442\u0435 PDF, DOC \u0438\u043B\u0438 DOCX."), false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024
    // Лимит 10MB
  }
});
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
app.post("/api/submit-application", upload.single("cv"), async (req, res) => {
  try {
    console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438 \u0434\u0430\u043D\u043D\u0438:", req.body);
    console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0444\u0430\u0439\u043B:", req.file);
    if (!req.file) {
      return res.status(400).json({ message: "\u041C\u043E\u043B\u044F, \u043F\u0440\u0438\u043A\u0430\u0447\u0435\u0442\u0435 CV \u0444\u0430\u0439\u043B." });
    }
    res.status(200).json({ message: "\u041A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0443\u0440\u0430\u0442\u0430 \u0432\u0438 \u0431\u0435\u0448\u0435 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!" });
  } catch (error) {
    console.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0443\u0440\u0430\u0442\u0430:", error);
    const errorMessage = error.message || "\u0412\u044A\u0437\u043D\u0438\u043A\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0443\u0440\u0430\u0442\u0430. \u041C\u043E\u043B\u044F, \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E.";
    res.status(500).json({ message: errorMessage });
  }
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error(err);
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "3000", 10);
  server.listen({
    port,
    host: "127.0.0.1",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
