/* ==========================================================================
   شباب بلادي — Site Script
   يشمل: نظام ترجمة ثنائي اللغة (AR/EN) مع حفظ الاختيار في localStorage،
   حالة شريط التنقل + الرابط النشط، القائمة على الجوال، حركات الكشف عند
   التمرير، عدّادات الإحصائيات المتحركة، زر العودة للأعلى، والتحقق من صحة
   نماذج التواصل والتطوع.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     قاموس الترجمة الكامل — كل مفتاح موجود بالعربية والإنجليزية
     ------------------------------------------------------------------ */
  var translations = {
    ar: {
      preloaderText: 'جاري التحميل',
      brandName: 'الشباب السوداني',
      navHome: 'الرئيسية',
      navAbout: 'تعلمي',
      navServices: 'الكورسات',
      navvolnteer: 'تطوع معانا',
      navContact: 'تواصل معانا',
      navCta: 'انضم كمتطوع',
      langToggleAria: 'تغيير اللغة',
      menuToggleAria: 'فتح القائمة',
      backToTopAria: 'العودة للأعلى',

      heroEyebrow: 'منصة تطوعية مجتمعية',
      heroTitle: 'معًا نُضيء طريق التغيير',
      heroDesc: 'الشباب السوداني منصة تعليمية تهدف إلى تمكين الشباب من خلال التعليم المجاني، وتطوير المهارات، وفتح فرص جديدة للمستقبل.',
      heroBtnPrimary: 'انضم كمتطوع',
      heroBtnSecondary: 'استكشف الكورسات',
      heroImageAlt: 'متطوعون يعملون معًا',
      chipImpact: 'أثر حقيقي',
      chipCommunity: 'مجتمع متصل',

      stat1: 'ساعات عمل',
      stat2: 'كورس قادم',
      stat3: 'نسبة الأثر الإيجابي',
      stat4: 'دورات مجانية',

      aboutEyebrow: 'تعلمي',
      aboutTitle: 'قصتنا بدأت بفكرة بسيطة',
      aboutDesc: 'الشباب السوداني منصة تؤمن أن الوصول إلى التعليم الجيد يجب ألا يكون مرتبطًا بالقدرة على الدفع. لذلك نوفر للشباب فرصًا تعليمية مجانية تساعدهم على تطوير أنفسهم أكاديميًا ومهنيًا.',
      aboutImageAlt: 'فريق الشباب السوداني التطوعي',
      aboutPoint1: 'تعلّم مجانًا\nالوصول إلى الدورات التعليمية دون رسوم.',
      aboutPoint2: 'طوّر نفسك\nاكتسب المعرفة والمهارات التي تحتاجها في الدراسة والحياة والعمل.',
      aboutPoint3: 'احصل على شهادة\nأثبت إتمامك للدورات من خلال شهادات إتمام.',

      servicesEyebrow: 'الكورسات',
      servicesTitle: 'اختر المجال الذي يحرّك شغفك',
      servicesDesc: 'مبادرات متنوعة تحتاج أيادٍ وقلوبًا مثلك، اختر ما يناسب وقتك ومهاراتك وابدأ رحلتك.',
      service1Title: 'التعليم والتمكين',
      service1Desc: 'دعم تعليمي وتدريبي للفئات الأقل حظًا لبناء مستقبل أفضل.',
      service2Title: 'البيئة والاستدامة',
      service2Desc: 'مبادرات تشجير وتنظيف وتوعية بيئية لحماية مواردنا الطبيعية.',
      service3Title: 'الصحة والرعاية',
      service3Desc: 'حملات صحية ودعم نفسي واجتماعي للأسر والمرضى المحتاجين.',
      service4Title: 'دعم المجتمع',
      service4Desc: 'مساندة الأسر المحتاجة وتوزيع الموارد الأساسية بكرامة وفعالية.',
      service5Title: 'الاستجابة الطارئة',
      service5Desc: 'فرق جاهزة للاستجابة السريعة عند الكوارث والأزمات الطارئة.',
      service6Title: 'تمكين الشباب',
      service6Desc: 'برامج قيادية ومهارات حياتية لإعداد جيل قادر على الإحداث والتغيير.',

      whyEyebrow: 'تطوع معانا',
      whyTitle: 'لسنا مجرد منصة، نحن حركة مجتمعية',
      whyQuote: '"نؤمن أن التغيير الحقيقي يبدأ من فعل صغير يقوم به شخص واحد، ويكبر عندما يجتمع مع غيره."',
      why1Title: 'شفافية كاملة في الأثر',
      why1Desc: 'تقارير دورية توضح أثر كل ساعة تطوعها معنا.',
      why2Title: 'مرونة تناسب وقتك',
      why2Desc: 'فرص تطوع عن بعد وميدانية بجداول زمنية مرنة.',
      why3Title: 'مجتمع داعم ومحترف',
      why3Desc: 'فريق تنسيق يرافقك من أول يوم حتى إتمام المبادرة.',
      why4Title: 'شراكات موثوقة',
      why4Desc: 'تعاون مع جهات ومؤسسات معتمدة لضمان جودة كل مبادرة.',

      ctaTitle: 'جاهز لتكون جزءًا من التغيير؟',
      ctaDesc: 'انضم اليوم إلى آلاف المتطوعين وابدأ في صناعة أثر حقيقي يلمسه مجتمعك.',
      ctaBtn: 'انضم الآن',
      ctaBtnSecondary: 'تواصل معنا',

      footerAbout: 'منصة تطوعية تجمع الشغوفين بالعطاء لصناعة أثر مجتمعي مستدام.',
      footerLinksTitle: 'روابط سريعة',
      footerContactTitle: 'تواصل معانا',
      footerBuiltBy: 'هذا الموقع من تصميم وتطوير KIN وفريق الشباب السوداني',
      footerCopy: '© 2026 الشباب السوداني. جميع الحقوق محفوظة.',

      comingSoon: 'قريبًا',

      coursesHeroTitle: 'كورساتنا في الطريق إليك',
      coursesHeroDesc: 'نجهّز الآن مجموعة من الكورسات المجانية لتطوير مهاراتك الأكاديمية والمهنية. تابعنا عن قرب — سنُعلن أول ما تكون الكورسات جاهزة.',
      coursesCtaTitle: 'عايز تكون أول من يعرف؟',
      coursesCtaDesc: 'تواصل معنا أو انضم كمتطوع، وهنبعتلك إشعار فور ما الكورسات تفتح.',

      learningHeroTitle: 'لوحة تعلّمك قيد التجهيز',
      learningHeroDesc: 'هنا هتقدر تتابع تقدمك في الكورسات، وتشوف شهاداتك، وتكمّل من حيث وقفت. لسه بنشتغل عليها، وهتكون متاحة قريبًا جدًا.',
      learningCtaTitle: 'مستني الكورسات تفتح؟',
      learningCtaDesc: 'تواصل معنا لو عندك أي استفسار، أو تابعنا للإعلان فور ما المنصة التعليمية تكون جاهزة.',

      volHeroEyebrow: 'تطوع معانا',
      volHeroTitle: 'وقتك هو بداية قصة أثر حقيقية',
      volHeroDesc: 'مهما كان المجال الذي يناسبك، هناك مكان لك هنا. انضم إلى مجتمع داعم ومحترف، وحوّل بضع ساعات إلى تغيير يلمسه مجتمعك.',
      volBenefitsEyebrow: 'ماذا تكسب',
      volBenefitsTitle: 'التطوع معنا يمنحك أكثر من مجرد تجربة',
      volAreasEyebrow: 'مجالات التطوع',
      volProcessEyebrow: 'كيف تبدأ',
      volProcessTitle: 'أربع خطوات بسيطة لتنطلق',

      benefit1Title: 'شهادات وخبرة معتمدة',
      benefit1Desc: 'شهادة تطوع رسمية وخبرة عملية تُضاف إلى سيرتك الذاتية.',
      benefit2Title: 'شبكة علاقات واسعة',
      benefit2Desc: 'تعرّف على متطوعين وشركاء من خلفيات ومجالات متنوعة.',
      benefit3Title: 'تدريب ومهارات جديدة',
      benefit3Desc: 'ورش وتدريبات دورية تطوّر مهاراتك القيادية والتنظيمية.',
      benefit4Title: 'أثر تشعر به فعليًا',
      benefit4Desc: 'تقارير دورية تُظهر لك أثر كل ساعة تطوعتها بوضوح.',

      step1Title: 'عبّئ نموذج التقديم',
      step1Desc: 'أخبرنا عن نفسك والمجال الذي يهمك في النموذج أدناه.',
      step2Title: 'مقابلة تعارف قصيرة',
      step2Desc: 'يتواصل معك فريق التنسيق خلال أيام لمعرفة اهتماماتك بدقة.',
      step3Title: 'توجيه وتهيئة',
      step3Desc: 'نطلعك على المبادرة المناسبة ونجهزك بكل ما تحتاجه للبدء.',
      step4Title: 'ابدأ التطوع',
      step4Desc: 'انطلق في مبادرتك الأولى وابدأ في صناعة أثر حقيقي.',

      quickApplyField: 'تقديم سريع كمتطوع ميداني',
      joinOrgTeam: 'انضم إلى فريق التنظيم',

      contactHeroTitle: 'خبّرنا بفكرتك، وهنسمعك',
      contactHeroDesc: 'سؤال، اقتراح، شراكة، أو مجرد سلام؟ اكتب لنا في النموذج تحت وفريقنا هيتواصل معاك تاني في أقرب وقت.',
      contactFormTitleShort: 'تواصل معنا',
      contactFormMessage: 'هل لديك سؤال أو اقتراح؟ نحن هنا للاستماع إليك.',
      formLabelName: 'الاسم:',
      formLabelEmail: 'البريد الإلكتروني',
      formLabelSubject: 'موضوع الرسالة',
      formLabelMessage: 'رسالتك',
      formLabelHowHeard: 'كيف سمعت عنا؟',
      formSubmitBtn: 'إرسال الرسالة',
      formSubmitting: 'جارٍ الإرسال...',
      contactSigninNote: 'فريقنا بيرد على كل الرسايل',
      contactSigninLink: 'يدويًا',

      errorRequired: 'هذا الحقل مطلوب',
      errorEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      errorPhone: 'يرجى إدخال رقم هاتف صحيح',
      errorMinlength: 'الحد الأدنى {min} أحرف',
      errorChoice: 'يرجى اختيار خيار واحد على الأقل',
      formErrorGeneral: 'يوجد خطأ في بعض الحقول، يرجى مراجعتها.',
      formSuccessGeneral: 'تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.',
      formLoadingGeneral: 'جارٍ الإرسال...'
    },

    en: {
      preloaderText: 'Loading',
      brandName: 'Sudanese Youth',
      navHome: 'Home',
      navAbout: 'My Learning',
      navServices: 'Courses',
      navvolnteer: 'Volunteer With Us',
      navContact: 'Contact Us',
      navCta: 'Join as a Volunteer',
      langToggleAria: 'Change language',
      menuToggleAria: 'Open menu',
      backToTopAria: 'Back to top',

      heroEyebrow: 'A Community Volunteering Platform',
      heroTitle: 'Together, We Light the Way for Change',
      heroDesc: 'Sudanese Youth is an educational platform that aims to empower young people through free education, skill development, and new opportunities for the future.',
      heroBtnPrimary: 'Join as a Volunteer',
      heroBtnSecondary: 'Explore Courses',
      heroImageAlt: 'Volunteers working together',
      chipImpact: 'Real Impact',
      chipCommunity: 'Connected Community',

      stat1: 'Volunteer Hours',
      stat2: 'Upcoming Courses',
      stat3: 'Positive Impact Rate',
      stat4: 'Free Courses',

      aboutEyebrow: 'My Learning',
      aboutTitle: 'Our Story Started With a Simple Idea',
      aboutDesc: 'Sudanese Youth is a platform that believes access to quality education should never depend on the ability to pay. That is why we provide young people with free educational opportunities that help them grow academically and professionally.',
      aboutImageAlt: 'The Sudanese Youth volunteer team',
      aboutPoint1: 'Learn for Free\nAccess educational courses with no fees.',
      aboutPoint2: 'Develop Yourself\nGain the knowledge and skills you need for study, life, and work.',
      aboutPoint3: 'Earn a Certificate\nProve your course completion with certificates of completion.',

      servicesEyebrow: 'Courses',
      servicesTitle: 'Choose the Area That Moves You',
      servicesDesc: 'Diverse initiatives that need hands and hearts like yours — pick what fits your time and skills and start your journey.',
      service1Title: 'Education & Empowerment',
      service1Desc: 'Educational and training support for underserved groups to build a better future.',
      service2Title: 'Environment & Sustainability',
      service2Desc: 'Tree-planting, clean-up, and environmental awareness initiatives to protect our natural resources.',
      service3Title: 'Health & Care',
      service3Desc: 'Health campaigns and psychological and social support for families and patients in need.',
      service4Title: 'Community Support',
      service4Desc: 'Supporting families in need and distributing essential resources with dignity and efficiency.',
      service5Title: 'Emergency Response',
      service5Desc: 'Teams ready for rapid response during disasters and emergencies.',
      service6Title: 'Youth Empowerment',
      service6Desc: 'Leadership programs and life skills to prepare a generation capable of driving change.',

      whyEyebrow: 'Volunteer With Us',
      whyTitle: "We're Not Just a Platform — We're a Community Movement",
      whyQuote: '"We believe real change starts with one small act by one person, and grows when it joins with others."',
      why1Title: 'Full Transparency in Impact',
      why1Desc: 'Regular reports showing the impact of every hour you volunteer with us.',
      why2Title: 'Flexibility That Fits Your Time',
      why2Desc: 'Remote and on-site volunteer opportunities with flexible schedules.',
      why3Title: 'A Supportive, Professional Community',
      why3Desc: 'A coordination team that walks with you from day one until the initiative is complete.',
      why4Title: 'Trusted Partnerships',
      why4Desc: 'Collaboration with accredited organizations and institutions to ensure the quality of every initiative.',

      ctaTitle: 'Ready to Be Part of the Change?',
      ctaDesc: 'Join thousands of volunteers today and start creating real impact your community can feel.',
      ctaBtn: 'Join Now',
      ctaBtnSecondary: 'Contact Us',

      footerAbout: 'A volunteering platform that brings together people passionate about giving to create lasting community impact.',
      footerLinksTitle: 'Quick Links',
      footerContactTitle: 'Contact Us',
      footerBuiltBy: 'This website was built by KIN and the Sudanese Youth team',
      footerCopy: '© 2026 Sudanese Youth. All rights reserved.',

      comingSoon: 'Coming Soon',

      coursesHeroTitle: 'Our Courses Are on the Way to You',
      coursesHeroDesc: "We're currently preparing a set of free courses to develop your academic and professional skills. Stay close — we'll announce it as soon as the courses are ready.",
      coursesCtaTitle: 'Want to Be the First to Know?',
      coursesCtaDesc: "Contact us or join as a volunteer, and we'll notify you the moment the courses open.",

      learningHeroTitle: 'Your Learning Dashboard Is Being Prepared',
      learningHeroDesc: "Here you'll be able to track your progress in courses, view your certificates, and continue where you left off. We're still working on it, and it will be available very soon.",
      learningCtaTitle: 'Waiting for the Courses to Open?',
      learningCtaDesc: "Contact us if you have any questions, or follow us for the announcement as soon as the learning platform is ready.",

      volHeroEyebrow: 'Volunteer With Us',
      volHeroTitle: 'Your Time Is the Beginning of a Real Story of Impact',
      volHeroDesc: 'Whichever area calls to you, there is a place for you here. Join a professional, supportive community and turn a few hours into a change your community can feel.',
      volBenefitsEyebrow: 'What You Gain',
      volBenefitsTitle: 'Volunteering With Us Gives You More Than an Experience',
      volAreasEyebrow: 'Volunteer Areas',
      volProcessEyebrow: 'How It Works',
      volProcessTitle: 'Four Simple Steps to Get Started',

      benefit1Title: 'Certified Experience',
      benefit1Desc: 'An official volunteer certificate and hands-on experience to add to your résumé.',
      benefit2Title: 'A Wide Network',
      benefit2Desc: 'Meet volunteers and partners from diverse backgrounds and fields.',
      benefit3Title: 'Training & New Skills',
      benefit3Desc: 'Regular workshops and training that develop your leadership and organizational skills.',
      benefit4Title: 'Impact You Can Actually Feel',
      benefit4Desc: 'Regular reports that clearly show the impact of every hour you volunteer.',

      step1Title: 'Fill in the Application Form',
      step1Desc: "Tell us about yourself and the area you're interested in using the form below.",
      step2Title: 'A Short Introductory Interview',
      step2Desc: 'Our coordination team reaches out within a few days to learn about your interests in detail.',
      step3Title: 'Guidance & Onboarding',
      step3Desc: 'We match you with the right initiative and prepare you with everything you need to start.',
      step4Title: 'Start Volunteering',
      step4Desc: 'Begin your first initiative and start creating real impact.',

      quickApplyField: 'Quick Application as a Field Volunteer',
      joinOrgTeam: 'Join the Organizing Team',

      contactHeroTitle: "Tell Us Your Idea, We're Listening",
      contactHeroDesc: 'A question, a suggestion, a partnership, or just a hello? Write to us in the form below and our team will get back to you as soon as possible.',
      contactFormTitleShort: 'Contact Us',
      contactFormMessage: "Have a question or a suggestion? We're here to listen.",
      formLabelName: 'Name:',
      formLabelEmail: 'Email Address',
      formLabelSubject: 'Subject',
      formLabelMessage: 'Your Message',
      formLabelHowHeard: 'How did you hear about us?',
      formSubmitBtn: 'Send Message',
      formSubmitting: 'Sending...',
      contactSigninNote: 'Our team replies to every message',
      contactSigninLink: 'personally',

      errorRequired: 'This field is required',
      errorEmail: 'Please enter a valid email address',
      errorPhone: 'Please enter a valid phone number',
      errorMinlength: 'Minimum {min} characters',
      errorChoice: 'Please choose at least one option',
      formErrorGeneral: 'Some fields have errors, please review them.',
      formSuccessGeneral: 'Your request has been sent successfully, we will contact you soon.',
      formLoadingGeneral: 'Sending...'
    }
  };

  var LANG_KEY = 'sy_lang';
  var root = document.documentElement;
  var currentLang = (root.getAttribute('lang') === 'en') ? 'en' : 'ar';

  /* ------------------------------------------------------------------
     حفظ النص الأصلي (العربي) لكل عنصر مترجَم، لاستخدامه عند الرجوع
     للعربية دون فقدان أي تنسيق أو مسافات موجودة أصلاً في HTML.
     ------------------------------------------------------------------ */
  var originalText = new Map();

  function rememberOriginal(el, type, value) {
    var rec = originalText.get(el) || {};
    rec[type] = value;
    originalText.set(el, rec);
  }

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    rememberOriginal(el, 'text', el.textContent);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    rememberOriginal(el, 'aria', el.getAttribute('aria-label') || '');
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    rememberOriginal(el, 'placeholder', el.getAttribute('placeholder') || '');
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    rememberOriginal(el, 'alt', el.getAttribute('alt') || '');
  });
  document.querySelectorAll('[data-loading-text-i18n]').forEach(function (el) {
    rememberOriginal(el, 'loadingText', el.getAttribute('data-loading-text') || '');
  });

  function applyLanguage(lang, persist) {
    currentLang = (lang === 'en') ? 'en' : 'ar';
    var isEn = currentLang === 'en';
    var dict = translations[currentLang];

    root.setAttribute('lang', isEn ? 'en' : 'ar');
    root.setAttribute('dir', isEn ? 'ltr' : 'rtl');

    if (persist !== false) {
      try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* ignore */ }
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      } else {
        var original = originalText.get(el);
        if (original) el.textContent = original.text;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      } else {
        var original = originalText.get(el);
        if (original) el.setAttribute('aria-label', original.aria);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      } else {
        var original = originalText.get(el);
        if (original) el.setAttribute('placeholder', original.placeholder);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key]) {
        el.setAttribute('alt', dict[key]);
      } else {
        var original = originalText.get(el);
        if (original) el.setAttribute('alt', original.alt);
      }
    });

    /* نص التحميل على أزرار الإرسال (يُستخدم لاحقًا أثناء المعالجة) */
    document.querySelectorAll('[data-loading-text-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-loading-text-i18n');
      el.setAttribute('data-loading-text', dict[key] || (originalText.get(el) || {}).loadingText || '');
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang-option') === currentLang);
    });

    /* رسائل الحقول العامة (نظام التحقق) تُحدَّث ديناميكيًا داخل initForm */
    document.dispatchEvent(new CustomEvent('languagechange:sy', { detail: { lang: currentLang } }));
  }

  /* عند تحميل الصفحة: طبّق اللغة المحفوظة (dir/lang مضبوطة مسبقًا في <head>
     عبر i18n-init.js لتفادي الوميض، لكن يجب أيضًا استبدال النصوص هنا) */
  function initLanguageFromStorage() {
    var saved = 'ar';
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === 'en' || stored === 'ar') saved = stored;
    } catch (e) { /* ignore */ }
    applyLanguage(saved, false);
  }
  initLanguageFromStorage();

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar', true);
    });
  }

  /* ------------------------------------------------------------------
     شريط التنقل: خلفية عند التمرير + شريط التقدم
     ------------------------------------------------------------------ */
  var navbar = document.getElementById('navbar');
  var scrollProgress = document.getElementById('scrollProgress');
  var backToTop = document.getElementById('backToTop');

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (navbar) navbar.classList.toggle('scrolled', scrollY > 20);
    if (backToTop) backToTop.classList.toggle('visible', scrollY > 500);

    if (scrollProgress) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     القائمة على الجوال
     ------------------------------------------------------------------ */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    if (menuToggle) menuToggle.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    mobileMenu.querySelectorAll('.mobile-link, .mobile-cta').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* ------------------------------------------------------------------
     الرابط النشط أثناء التمرير (على الصفحة الرئيسية فقط)
     ------------------------------------------------------------------ */
  var sections = Array.from(document.querySelectorAll('main section[id], .hero[id]')).filter(function (s) { return s.id; });
  var navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === '#' + id || href.endsWith('#' + id));
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(function (section) { spyObserver.observe(section); });
  }

  /* ------------------------------------------------------------------
     حركات الكشف عند التمرير
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ------------------------------------------------------------------
     عدّادات الإحصائيات المتحركة
     ------------------------------------------------------------------ */
  var statEls = document.querySelectorAll('.stat-number[data-count]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = performance.now();

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      el.textContent = value.toLocaleString('en-US') + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString('en-US') + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && statEls.length) {
    var statObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target.toLocaleString('en-US') + suffix;
    });
  }

  /* ------------------------------------------------------------------
     التمرير السلس للروابط الداخلية (يغلق قائمة الجوال أيضًا)
     ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var navHeight = navbar ? navbar.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
        window.scrollTo({ top: top, behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

  /* ==================================================================
     التحقق من صحة النماذج (التواصل + التطوع)
     ------------------------------------------------------------------
     نظام عام: أي عنصر form له data-validate="true" يُفعَّل عليه التحقق.
     كل حقل مطلوب يوضع في .field-group به .field-control و .field-error.
     الرسائل تُترجم ديناميكيًا حسب اللغة الحالية عبر translations.
     ================================================================== */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^[0-9+\s-]{8,15}$/;

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || (translations.ar[key] || '');
  }

  function showFieldError(group, message) {
    group.classList.add('invalid');
    var errorEl = group.querySelector('.field-error');
    if (errorEl && message) errorEl.textContent = message;
  }

  function clearFieldError(group) {
    group.classList.remove('invalid');
  }

  function validateField(group) {
    var control = group.querySelector('.field-control');
    if (!control) return true;

    var value = (control.value || '').trim();
    var isRequired = control.hasAttribute('required');
    var type = control.getAttribute('type') || control.tagName.toLowerCase();

    if (isRequired && !value) {
      showFieldError(group, t('errorRequired'));
      return false;
    }

    if (value && type === 'email' && !EMAIL_RE.test(value)) {
      showFieldError(group, t('errorEmail'));
      return false;
    }

    if (value && type === 'tel' && !PHONE_RE.test(value)) {
      showFieldError(group, t('errorPhone'));
      return false;
    }

    if (value && control.hasAttribute('minlength')) {
      var min = parseInt(control.getAttribute('minlength'), 10);
      if (value.length < min) {
        showFieldError(group, t('errorMinlength').replace('{min}', min));
        return false;
      }
    }

    clearFieldError(group);
    return true;
  }

  function validateChoiceGroup(group) {
    var inputs = group.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    if (!inputs.length) return true;
    var required = group.hasAttribute('data-required');
    if (!required) return true;
    var checked = Array.from(inputs).some(function (i) { return i.checked; });
    if (!checked) {
      showFieldError(group, t('errorChoice'));
      return false;
    }
    clearFieldError(group);
    return true;
  }

  function initForm(form) {
    var fieldGroups = form.querySelectorAll('.field-group');
    var statusEl = form.querySelector('.form-status');
    var submitBtn = form.querySelector('[type="submit"]');

    fieldGroups.forEach(function (group) {
      var control = group.querySelector('.field-control');
      if (control) {
        control.addEventListener('blur', function () { validateField(group); });
        control.addEventListener('input', function () {
          if (group.classList.contains('invalid')) validateField(group);
        });
      }
      if (group.classList.contains('choice-group-wrap')) {
        group.querySelectorAll('input').forEach(function (input) {
          input.addEventListener('change', function () { validateChoiceGroup(group); });
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      fieldGroups.forEach(function (group) {
        if (group.classList.contains('choice-group-wrap')) {
          if (!validateChoiceGroup(group)) isValid = false;
        } else if (!validateField(group)) {
          isValid = false;
        }
      });

      if (statusEl) {
        statusEl.classList.remove('show', 'success', 'error');
      }

      if (!isValid) {
        if (statusEl) {
          var statusTextErr = statusEl.querySelector('.status-text');
          if (statusTextErr) statusTextErr.textContent = t('formErrorGeneral');
          statusEl.classList.add('show', 'error');
        }
        var firstInvalid = form.querySelector('.field-group.invalid .field-control');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        var originalLabel = submitBtn.textContent;
        submitBtn.textContent = t('formLoadingGeneral');

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
          form.reset();
          fieldGroups.forEach(clearFieldError);

          if (statusEl) {
            var statusTextOk = statusEl.querySelector('.status-text');
            if (statusTextOk) statusTextOk.textContent = t('formSuccessGeneral');
            statusEl.classList.add('show', 'success');
          }
        }, 900);
      }
    });
  }

  document.querySelectorAll('form[data-validate="true"]').forEach(initForm);
})();
console.log("This website was built by KIN. What are you doing here? \ud83d\udc40");

/* ==========================================================================
   شاشة التحميل (Preloader) — تُخفى بعد اكتمال تحميل الصفحة
   ========================================================================== */
(function () {
  'use strict';

  var preloader = document.getElementById('preloader');
  if (!preloader) return;

  document.body.classList.add('is-loading');

  var MIN_VISIBLE_MS = 500; // أقل مدة ظهور حتى لا تومض بسرعة على الاتصال السريع
  var shownAt = Date.now();

  function hidePreloader() {
    var elapsed = Date.now() - shownAt;
    var delay = Math.max(0, MIN_VISIBLE_MS - elapsed);

    setTimeout(function () {
      preloader.classList.add('hidden');
      document.body.classList.remove('is-loading');
      setTimeout(function () {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 700);
    }, delay);
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }

  // شبكة أمان: إخفاء إجباري بعد 6 ثوانٍ حتى لو تأخر تحميل بعض الموارد
  setTimeout(hidePreloader, 6000);
})();