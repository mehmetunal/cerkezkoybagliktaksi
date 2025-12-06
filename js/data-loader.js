// Data Loader - Load content from embedded data

// About Us data (loaded from data/hakkimizda.json)
const aboutUsData = {
  "companyStory": "Çerkezköy Bağlık Taksi olarak 2025 yılından beri Çerkezköy ilçesine bağlı Bağlık bölgesinde güvenilir taksi hizmeti sunmaktayız. Bağlık taksi durağı olarak bölgenin önde gelen taksi firmalarından biriyiz.",
  "mission": "Müşterilerimize güvenilir, hızlı ve konforlu ulaşım hizmeti sunarak hayatlarını kolaylaştırmak.",
  "vision": "Bağlık bölgesinde taksi hizmeti denince akla ilk gelen, teknoloji ile donatılmış, müşteri odaklı ve sürdürülebilir bir taksi firması olmak.",
  "values": [
    {
      "title": "Güvenilirlik",
      "description": "Zamanında varış ve güvenli yolculuk garantisi"
    },
    {
      "title": "Müşteri Memnuniyeti",
      "description": "Her müşterimiz bizim için değerlidir"
    },
    {
      "title": "Profesyonellik",
      "description": "Deneyimli şoför kadromuz ve modern araç filosu"
    },
    {
      "title": "Uygun Fiyat",
      "description": "Kaliteli hizmeti uygun fiyatlarla sunmak"
    },
    {
      "title": "7/24 Hizmet",
      "description": "Kesintisiz hizmet anlayışı"
    }
  ],
  "stats": {
    "founded": "2025",
    "annualPassengers": "50.000+",
    "fleet": "25+ araç",
    "satisfaction": "%98",
    "drivers": "30+ şoför"
  },
  "description": "Yılların deneyimi ve müşteri memnuniyeti odaklı hizmet anlayışımızla Bağlık bölgesinde güvenilir taksi hizmeti sağlıyoruz. Modern araç filosu ve deneyimli şoför kadromuz ile müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Bağlık taksi durağı olarak teknolojik altyapımız ve müşteri odaklı yaklaşımımız sayesinde binlerce memnun müşteriye hizmet verdik ve vermeye devam ediyoruz."
};

// Load About Us content
function loadAboutUs() {
    try {
        const data = aboutUsData;
        
        // Update company story
        const storyElement = document.querySelector('#company-story');
        if (storyElement) {
            storyElement.innerHTML = `
                <p class="lead">${data.companyStory}</p>
                <p>${data.description}</p>
            `;
        }
        
        // Update mission/vision if elements exist
        const missionElement = document.querySelector('#mission');
        if (missionElement) {
            missionElement.textContent = data.mission;
        }
        
        const visionElement = document.querySelector('#vision');
        if (visionElement) {
            visionElement.textContent = data.vision;
        }
        
        // Update stats
        if (data.stats) {
            const foundedElement = document.querySelector('#founded-year');
            if (foundedElement) {
                foundedElement.textContent = data.stats.founded;
            }
        }
    } catch (error) {
        console.error('Hakkımızda verisi yüklenirken hata:', error);
    }
}

// Services data (loaded from data/hizmetler.json)
const servicesData = [
  {
    "slug": "sehir-ici-taksi",
    "title": "Şehir İçi Taksi Hizmeti",
    "description": "Bağlık bölgesinde 7/24 şehir içi taksi hizmeti. Bağlık taksi durağı olarak hızlı, güvenilir ve uygun fiyatlı ulaşım çözümü.",
    "features": [
      "7/24 hizmet",
      "Hızlı varış",
      "Güvenli yolculuk",
      "Uygun fiyat"
    ],
    "price": "Mesafe bazlı ücretlendirme"
  },
  {
    "slug": "havalimani-transferi",
    "title": "Havalimanı Transfer Hizmeti",
    "description": "Bağlık'tan İstanbul Havalimanı (IST), Sabiha Gökçen (SAW) ve Çorlu Havalimanı'na güvenli ve konforlu transfer hizmeti.",
    "features": [
      "Zamanında varış garantisi",
      "Geniş bagaj kapasitesi",
      "Konforlu araçlar",
      "Rezervasyon ile kesin yer"
    ],
    "airports": [
      "İstanbul Havalimanı (IST)",
      "Sabiha Gökçen (SAW)",
      "Çorlu Havalimanı"
    ]
  },
  {
    "slug": "sehirler-arasi-taksi",
    "title": "Şehirler Arası Taksi Hizmeti",
    "description": "Bağlık'tan Türkiye'nin her yerine şehirler arası taksi hizmeti. Uzun yolculuklarınız için konforlu ve güvenli ulaşım.",
    "features": [
      "Uzun yol deneyimi",
      "Konforlu araçlar",
      "Mola imkanı",
      "Sabit fiyat garantisi"
    ]
  },
  {
    "slug": "gece-taksi",
    "title": "Gece Taksi Hizmeti",
    "description": "Bağlık'ta gece saatlerinde de kesintisiz taksi hizmeti. Bağlık taksi durağı olarak güvenli ve hızlı ulaşım garantisi.",
    "features": [
      "7/24 hizmet",
      "Hızlı varış",
      "Güvenli yolculuk",
      "Gece tarifesi"
    ]
  },
  {
    "slug": "baglik-taksi",
    "title": "Bağlık Taksi Hizmeti",
    "description": "Bağlık bölgesinde özel taksi hizmeti. Bağlık taksi durağı olarak şehir içi ve şehirler arası ulaşım çözümleri.",
    "features": [
      "Bölge uzmanı şoförler",
      "Hızlı varış",
      "Uygun fiyat",
      "7/24 hizmet"
    ]
  }
];

// Load Services content
function loadServices() {
    try {
        const services = servicesData;
        
        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;
        
        // Services are already in HTML, but we can enhance them with JSON data if needed
        // This is mainly for future dynamic loading
    } catch (error) {
        console.error('Hizmetler verisi yüklenirken hata:', error);
    }
}

// FAQ data (loaded from data/sss.json)
const faqData = {
  "genel": [
    {
      "question": "Bağlık'tan İstanbul Havalimanı'na ne kadar sürer?",
      "answer": "Bağlık'tan İstanbul Havalimanı'na yaklaşık 1.5 saat sürmektedir. Trafik durumuna göre bu süre değişebilir."
    },
    {
      "question": "Gece tarifesi ne zaman başlar?",
      "answer": "Gece tarifesi saat 23:00'da başlar ve 06:00'a kadar devam eder. Bu saatler arasında %20 ek ücret uygulanır."
    },
    {
      "question": "Hangi bölgelerde hizmet veriyorsunuz?",
      "answer": "Bağlık bölgesinde hizmet vermekteyiz. Bağlık taksi durağı olarak ayrıca şehirler arası ve havalimanı transfer hizmetleri de sunmaktayız."
    },
    {
      "question": "7/24 hizmet veriyor musunuz?",
      "answer": "Evet, 7 gün 24 saat kesintisiz hizmet vermekteyiz."
    }
  ],
  "hizmetler": [
    {
      "question": "Havalimanı transferinde bagaj limiti var mı?",
      "answer": "Standart bagaj limiti vardır. Fazla bagaj için önceden bilgi vermeniz gerekmektedir."
    },
    {
      "question": "Şehirler arası taksi hizmetinde mola veriliyor mu?",
      "answer": "Evet, uzun yolculuklarda mola imkanı sunulmaktadır."
    }
  ],
  "odeme": [
    {
      "question": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      "answer": "Nakit ve kredi kartı ile ödeme kabul edilmektedir."
    },
    {
      "question": "Fatura kesiliyor mu?",
      "answer": "Evet, fatura kesilmektedir. Fatura bilgilerinizi rezervasyon sırasında belirtebilirsiniz."
    },
    {
      "question": "Taksit imkanı var mı?",
      "answer": "Kredi kartı ile ödemelerde bankanızın taksit imkanları geçerlidir."
    }
  ]
};

// Load FAQ content
function loadFAQ() {
    try {
        const faq = faqData;
        
        const faqContainer = document.getElementById('faq-container');
        if (!faqContainer) return;
        
        // FAQ items are already in HTML, but we can enhance them with JSON data if needed
        // This is mainly for future dynamic loading
    } catch (error) {
        console.error('SSS verisi yüklenirken hata:', error);
    }
}

// Initialize data loaders
document.addEventListener('DOMContentLoaded', function() {
    // Load content based on current page
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('hakkimizda.html')) {
        loadAboutUs();
    } else if (currentPath.includes('hizmetlerimiz.html')) {
        loadServices();
    } else if (currentPath.includes('sss.html')) {
        loadFAQ();
    }
});

