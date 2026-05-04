/* ============================================
   Faby - Internationalization (i18n)
   ============================================ */
const I18N = {
  currentLang: 'tr',
  languages: {
    tr: { flag: '🇹🇷', name: 'Türkçe' },
    en: { flag: '🇬🇧', name: 'English' },
    zh: { flag: '🇨🇳', name: '中文' },
    fr: { flag: '🇫🇷', name: 'Français' },
    hi: { flag: '🇮🇳', name: 'हिन्दी' },
    ar: { flag: '🇸🇦', name: 'العربية' },
    es: { flag: '🇪🇸', name: 'Español' }
  },
  appLinks: {
    ios:     'https://apps.apple.com/tr/app/faby-masal-ve-hikaye-olu%C5%9Ftur/id6757192081?l=tr',
    android: 'https://play.google.com/store/apps/details?id=com.ay.masalai&hl=tr'
  },
  socialLinks: {
    tr: {
      instagram: 'https://www.instagram.com/faby_social.tr',
      facebook:  'https://www.facebook.com/profile.php?id=61560615688209',
      linkedin:  'https://www.linkedin.com/company/112968787',
      tiktok:    'https://www.tiktok.com/@faby_social.tr',
      youtube:   'https://www.youtube.com/channel/UC5kLXi_e6zzyDaD7rsN2dSg'
    },
    zh: {
      instagram: 'https://www.instagram.com/faby_social.tr',
      facebook:  'https://www.facebook.com/profile.php?id=61560615688209',
      linkedin:  'https://www.linkedin.com/company/112968787',
      tiktok:    'https://www.tiktok.com/@faby_social.tr',
      youtube:   'https://www.youtube.com/channel/UC5kLXi_e6zzyDaD7rsN2dSg'
    },
    hi: {
      instagram: 'https://www.instagram.com/faby.india',
      facebook:  'https://www.facebook.com/profile.php?id=61588848854562',
      linkedin:  'https://www.linkedin.com/company/113270029',
      tiktok:    'https://www.tiktok.com/@fabuadmin',
      youtube:   'https://www.youtube.com/channel/UCk_NuKSTIWzM1VSd8iy-3Kw'
    },
    fr: {
      instagram: 'https://www.instagram.com/faby_fr.social',
      facebook:  'https://www.facebook.com/profile.php?id=61589097620258',
      linkedin:  'https://www.linkedin.com/company/113208192',
      tiktok:    'https://www.tiktok.com/@faby_fr.social',
      youtube:   'https://www.youtube.com/channel/UCB7M7VzmVblpoewq3wg0czQ'
    },
    es: {
      instagram: 'https://www.instagram.com/fabyfunesp',
      facebook:  'https://www.facebook.com/profile.php?id=61589048255725',
      linkedin:  'https://www.linkedin.com/company/120994145',
      tiktok:    'https://www.tiktok.com/@fabyesp_social',
      youtube:   'https://www.youtube.com/channel/UC26ZFpzTPub3dL18WW8uhJg'
    },
    en: {
      instagram: 'https://www.instagram.com/faby_en.social',
      facebook:  'https://www.facebook.com/profile.php?id=61588815383386',
      linkedin:  'https://www.linkedin.com/company/113209181',
      tiktok:    'https://www.tiktok.com/@faby_en',
      youtube:   'https://www.youtube.com/channel/UCEytRs5pM2CmWju0GJZbmyg'
    },
    ar: {
      instagram: 'https://www.instagram.com/faby_arabia',
      facebook:  'https://www.facebook.com/profile.php?id=61588914791555',
      linkedin:  'https://www.linkedin.com/company/115974004',
      tiktok:    'https://www.tiktok.com/@fabyarabia',
      youtube:   'https://www.youtube.com/channel/UCiS1i8kc-a3243VuwwQDLgw'
    }
  },
  screenshotMap: {
    tr: ['tr/2.jpg','tr/3.jpg','tr/4.jpg','tr/5.jpg','tr/6.jpg'],
    en: ['en/8.jpg','en/9.jpg','en/10.jpg','en/11.jpg','en/12.jpg'],
    zh: ['ch/14.jpg','ch/15.jpg','ch/16.jpg','ch/17.jpg','ch/18.jpg'],
    fr: ['fr/20.jpg','fr/21.jpg','fr/22.jpg','fr/23.jpg','fr/24.jpg'],
    es: ['sp/26.jpg','sp/27.jpg','sp/28.jpg','sp/29.jpg','sp/30.jpg'],
    hi: ['hi/32.jpg','hi/33.jpg','hi/34.jpg','hi/35.jpg','hi/36.jpg'],
    ar: ['arb/38.jpg','arb/39.jpg','arb/40.jpg','arb/41.jpg','arb/42.jpg']
  },
  books: {
    cindirella:    { tr:'Sindirella', en:'Cinderella', zh:'灰姑娘', fr:'Cendrillon', hi:'सिंड्रेला', ar:'سندريلا', es:'Cenicienta' },
    cirkin_ordek:  { tr:'Çirkin Ördek Yavrusu', en:'The Ugly Duckling', zh:'丑小鸭', fr:'Le Vilain Petit Canard', hi:'बदसूरत बत्तख़', ar:'البطة القبيحة', es:'El Patito Feo' },
    cizmeli_kedi:  { tr:'Çizmeli Kedi', en:'Puss in Boots', zh:'穿靴子的猫', fr:'Le Chat Botté', hi:'जूते वाली बिल्ली', ar:'القط ذو الحذاء', es:'El Gato con Botas' },
    kurbaga_prens: { tr:'Kurbağa Prens', en:'The Frog Prince', zh:'青蛙王子', fr:'Le Prince Grenouille', hi:'मेंढक राजकुमार', ar:'الأمير الضفدع', es:'El Príncipe Rana' },
    pamuk_prenses: { tr:'Pamuk Prenses', en:'Snow White', zh:'白雪公主', fr:'Blanche-Neige', hi:'स्नो व्हाइट', ar:'بياض الثلج', es:'Blancanieves' },
    red_hood:      { tr:'Kırmızı Başlıklı Kız', en:'Little Red Riding Hood', zh:'小红帽', fr:'Le Petit Chaperon Rouge', hi:'लाल टोपी वाली लड़की', ar:'ذات الرداء الأحمر', es:'Caperucita Roja' }
  },
  translations: {
    // -- Header / Nav --
    nav_home:      { tr:'Ana Sayfa', en:'Home', zh:'首页', fr:'Accueil', hi:'होम', ar:'الرئيسية', es:'Inicio' },
    nav_features:  { tr:'Özellikler', en:'Features', zh:'功能', fr:'Fonctionnalités', hi:'विशेषताएं', ar:'المميزات', es:'Características' },
    nav_stories:   { tr:'Masallar', en:'Stories', zh:'故事', fr:'Contes', hi:'कहानियाँ', ar:'القصص', es:'Cuentos' },
    nav_blog:      { tr:'Blog', en:'Blog', zh:'博客', fr:'Blog', hi:'ब्लॉग', ar:'المدونة', es:'Blog' },
    nav_parents:   { tr:'Ebeveynler', en:'Parents', zh:'家长', fr:'Parents', hi:'माता-पिता', ar:'الأهل', es:'Padres' },
    nav_contact:   { tr:'İletişim', en:'Contact', zh:'联系', fr:'Contact', hi:'संपर्क', ar:'اتصل بنا', es:'Contacto' },
    nav_download:  { tr:'Uygulamayı İndir', en:'Download App', zh:'下载应用', fr:'Télécharger', hi:'ऐप डाउनलोड', ar:'تحميل التطبيق', es:'Descargar App' },
    // -- Hero --
    hero_badge:    { tr:'50.000+ ebeveyn tarafından tercih ediliyor', en:'Trusted by 50,000+ parents', zh:'50,000+ 家长信赖', fr:'Choisi par 50 000+ parents', hi:'50,000+ अभिभावकों द्वारा पसंद', ar:'موثوق من 50,000+ من الآباء', es:'Elegido por 50.000+ padres' },
    hero_title_1:  { tr:'Çocuğunuzun', en:"Where Your Child Is", zh:'让您的孩子成为', fr:'Où votre enfant est le', hi:'आपका बच्चा जहाँ', ar:'حيث يكون طفلك', es:'Donde su hijo es el' },
    hero_title_hl: { tr:'Kahraman', en:'the Hero', zh:'主人公', fr:'Héros', hi:'नायक है', ar:'البطل', es:'Héroe' },
    hero_title_2:  { tr:'Olduğu Masallar', en:'of Every Tale', zh:'的童话故事', fr:'de chaque conte', hi:'हर कहानी का', ar:'في كل حكاية', es:'de cada cuento' },
    hero_desc:     { tr:'Yapay zeka ile saniyeler içinde kişiselleştirilmiş masallar oluşturun. Her gece yeni bir macera, her hikayede çocuğunuz başrol.', en:'Create personalized fairy tales in seconds with AI. A new adventure every night, your child as the main character.', zh:'用人工智能在几秒钟内创建个性化童话故事。每晚一个新冒险，您的孩子是主角。', fr:'Créez des contes personnalisés en quelques secondes avec l\'IA. Une nouvelle aventure chaque soir.', hi:'AI से कुछ ही सेकंड में व्यक्तिगत परी कथाएं बनाएं। हर रात एक नया साहसिक कार्य।', ar:'أنشئ قصصًا مخصصة في ثوانٍ بالذكاء الاصطناعي. مغامرة جديدة كل ليلة.', es:'Crea cuentos personalizados en segundos con IA. Una nueva aventura cada noche.' },
    store_apple_label:  { tr:"App Store'dan", en:'Download on the', zh:'在 App Store', fr:"Télécharger sur l'", hi:'App Store से', ar:'تحميل من', es:'Descargar en' },
    store_apple_name:   { tr:'İndirin', en:'App Store', zh:'下载', fr:'App Store', hi:'डाउनलोड', ar:'App Store', es:'App Store' },
    store_google_label: { tr:"Google Play'den", en:'Get it on', zh:'在 Google Play', fr:'Disponible sur', hi:'Google Play से', ar:'تحميل من', es:'Disponible en' },
    store_google_name:  { tr:'İndirin', en:'Google Play', zh:'下载', fr:'Google Play', hi:'डाउनलोड', ar:'Google Play', es:'Google Play' },
    // -- Floating badges --
    float_ai:      { tr:'Yapay Zeka', en:'AI Powered', zh:'人工智能', fr:'IA', hi:'AI संचालित', ar:'ذكاء اصطناعي', es:'IA' },
    float_personal:{ tr:'Kişisel Masallar', en:'Personal Tales', zh:'个性化故事', fr:'Contes personnels', hi:'व्यक्तिगत कहानियाँ', ar:'قصص شخصية', es:'Cuentos personales' },
    float_illust:  { tr:'İllüstrasyonlar', en:'Illustrations', zh:'插图', fr:'Illustrations', hi:'चित्रण', ar:'رسوم توضيحية', es:'Ilustraciones' },
    float_audio:   { tr:'Sesli Dinleme', en:'Audio Stories', zh:'有声故事', fr:'Audio', hi:'ऑडियो कहानियाँ', ar:'قصص صوتية', es:'Audio cuentos' },
    // -- Features section --
    feat_badge:    { tr:'Özellikler', en:'Features', zh:'功能', fr:'Fonctionnalités', hi:'विशेषताएं', ar:'المميزات', es:'Características' },
    feat_title_1:  { tr:'Sihirli', en:'Full of', zh:'充满', fr:'Plein de', hi:'जादुई', ar:'مليء بـ', es:'Lleno de' },
    feat_title_hl: { tr:'Özelliklerle', en:'Magical Features', zh:'魔法功能', fr:'Fonctionnalités Magiques', hi:'विशेषताओं', ar:'الميزات السحرية', es:'Características Mágicas' },
    feat_title_2:  { tr:'Dolu', en:'', zh:'', fr:'', hi:'से भरा', ar:'', es:'' },
    feat_desc:     { tr:'Her çocuğun ihtiyacına göre tasarlanmış, eğlenceli ve eğitici özellikler.', en:'Fun and educational features designed for every child\'s needs.', zh:'为每个孩子的需求设计的有趣且有教育意义的功能。', fr:'Des fonctionnalités amusantes et éducatives conçues pour chaque enfant.', hi:'हर बच्चे की ज़रूरतों के लिए डिज़ाइन की गई मज़ेदार और शैक्षिक सुविधाएँ।', ar:'ميزات ممتعة وتعليمية مصممة لاحتياجات كل طفل.', es:'Funciones divertidas y educativas diseñadas para cada niño.' },
    feat1_title:   { tr:'Yapay Zeka Masal Oluşturma', en:'AI Story Creation', zh:'AI 故事创作', fr:'Création IA de contes', hi:'AI कहानी निर्माण', ar:'إنشاء قصص بالذكاء الاصطناعي', es:'Creación de cuentos con IA' },
    feat1_desc:    { tr:'Gelişmiş yapay zeka teknolojisi ile saniyeler içinde özgün, yaratıcı ve eğitici masallar oluşturun.', en:'Create original, creative, and educational stories in seconds with advanced AI.', zh:'使用先进AI在几秒钟内创建原创、创意和教育性故事。', fr:'Créez des contes originaux et éducatifs en quelques secondes.', hi:'उन्नत AI से सेकंड में मौलिक, रचनात्मक कहानियाँ बनाएं।', ar:'أنشئ قصصًا أصلية وتعليمية في ثوانٍ.', es:'Crea cuentos originales y educativos en segundos con IA.' },
    feat2_title:   { tr:'Kişiselleştirilmiş Hikayeler', en:'Personalized Stories', zh:'个性化故事', fr:'Histoires personnalisées', hi:'व्यक्तिगत कहानियाँ', ar:'قصص مخصصة', es:'Historias personalizadas' },
    feat2_desc:    { tr:'Çocuğunuzun adı, ilgi alanları ve tercihleri ile her hikaye tamamen benzersiz ve kişisel olsun.', en:'Every story is unique with your child\'s name, interests and preferences.', zh:'用孩子的名字、兴趣和偏好让每个故事都独一无二。', fr:'Chaque histoire est unique avec le nom et les intérêts de votre enfant.', hi:'आपके बच्चे के नाम और रुचियों से हर कहानी अनूठी।', ar:'كل قصة فريدة باسم طفلك واهتماماته.', es:'Cada historia es única con el nombre e intereses de su hijo.' },
    feat3_title:   { tr:'Masal İllüstrasyonları', en:'Story Illustrations', zh:'故事插图', fr:'Illustrations', hi:'कहानी चित्रण', ar:'رسوم القصص', es:'Ilustraciones' },
    feat3_desc:    { tr:'Her masal, yapay zeka ile oluşturulmuş renkli ve büyüleyici illüstrasyonlarla hayat bulur.', en:'Every tale comes alive with colorful AI-generated illustrations.', zh:'每个故事都配有AI生成的彩色插图。', fr:'Chaque conte prend vie avec des illustrations colorées.', hi:'हर कहानी रंगीन AI चित्रों से जीवंत होती है।', ar:'كل قصة تنبض بالحياة مع رسوم ملونة.', es:'Cada cuento cobra vida con ilustraciones coloridas.' },
    feat4_title:   { tr:'Klasik Dünya Masalları', en:'Classic World Tales', zh:'经典世界童话', fr:'Contes classiques', hi:'क्लासिक विश्व कथाएं', ar:'حكايات عالمية كلاسيكية', es:'Cuentos clásicos' },
    feat4_desc:    { tr:"Kül Kedisi'nden Pamuk Prenses'e, dünyanın en sevilen klasik masalları parmak ucunuzda.", en:'From Cinderella to Snow White, the world\'s most beloved tales at your fingertips.', zh:'从灰姑娘到白雪公主，世界上最受欢迎的经典故事。', fr:'De Cendrillon à Blanche-Neige, les contes les plus aimés du monde.', hi:'सिंड्रेला से स्नो व्हाइट तक, दुनिया की सबसे प्रिय कहानियाँ।', ar:'من سندريلا إلى بياض الثلج، أحب حكايات العالم.', es:'De Cenicienta a Blancanieves, los cuentos más queridos del mundo.' },
    feat5_title:   { tr:'Eğitici Araçlar', en:'Educational Tools', zh:'教育工具', fr:'Outils éducatifs', hi:'शैक्षिक उपकरण', ar:'أدوات تعليمية', es:'Herramientas educativas' },
    feat5_desc:    { tr:'Kelime hazinesini genişleten, ahlaki değerler öğreten ve hayal gücünü geliştiren eğitici içerikler.', en:'Educational content that expands vocabulary, teaches values and develops imagination.', zh:'扩大词汇量、教授价值观、发展想象力的教育内容。', fr:'Du contenu éducatif qui enrichit le vocabulaire et développe l\'imagination.', hi:'शब्दावली बढ़ाने, मूल्य सिखाने और कल्पना विकसित करने वाली सामग्री।', ar:'محتوى تعليمي يوسع المفردات ويعلم القيم.', es:'Contenido educativo que amplía vocabulario y desarrolla imaginación.' },
    feat6_title:   { tr:'Sesli Masal Dinleme', en:'Audio Story Listening', zh:'有声故事', fr:'Écoute audio', hi:'ऑडियो कहानी', ar:'استماع صوتي', es:'Audio cuentos' },
    feat6_desc:    { tr:'Profesyonel seslendirme ile masalları dinleyin. Uyku öncesi için mükemmel bir deneyim.', en:'Listen to stories with professional narration. Perfect for bedtime.', zh:'用专业配音听故事。睡前完美体验。', fr:'Écoutez les contes avec une narration professionnelle. Parfait pour le coucher.', hi:'पेशेवर कथन से कहानियाँ सुनें। सोने से पहले के लिए बिल्कुल सही।', ar:'استمع للقصص بسرد احترافي. مثالي لوقت النوم.', es:'Escucha cuentos con narración profesional. Perfecto para dormir.' },
    feat7_title:   { tr:'Çok Dilli Destek', en:'Multilingual Support', zh:'多语言支持', fr:'Support multilingue', hi:'बहुभाषी समर्थन', ar:'دعم متعدد اللغات', es:'Soporte multilingüe' },
    feat7_desc:    { tr:'Türkçe başta olmak üzere birden fazla dilde masal oluşturabilirsiniz. Çocuğunuzun yabancı dil gelişimine de katkı sağlayın.', en:'Create stories in multiple languages. Support your child\'s foreign language development.', zh:'用多种语言创作故事。支持孩子的外语发展。', fr:'Créez des histoires en plusieurs langues. Soutenez le développement linguistique de votre enfant.', hi:'कई भाषाओं में कहानियाँ बनाएं। बच्चे के भाषा विकास में सहायता करें।', ar:'أنشئ قصصاً بلغات متعددة. ادعم تطور لغة طفلك.', es:'Crea cuentos en varios idiomas. Apoya el desarrollo lingüístico de tu hijo.' },
    feat8_title:   { tr:'Ebeveyn Kontrolü', en:'Parental Controls', zh:'家长控制', fr:'Contrôle parental', hi:'माता-पिता नियंत्रण', ar:'رقابة الوالدين', es:'Control parental' },
    feat8_desc:    { tr:'Tüm içerikler çocuk güvenliği standartlarına uygun şekilde filtrelenir. Ebeveyn kontrol paneli ile her şeyi takip edebilirsiniz.', en:'All content is filtered to child safety standards. Track everything with the parental control panel.', zh:'所有内容均按儿童安全标准过滤。通过家长控制面板跟踪一切。', fr:'Tout le contenu est filtré selon les normes de sécurité. Suivez tout avec le panneau parental.', hi:'सभी सामग्री बाल सुरक्षा मानकों के अनुसार फ़िल्टर की जाती है।', ar:'تتم تصفية جميع المحتويات وفق معايير سلامة الأطفال. تتبع كل شيء من لوحة التحكم.', es:'Todo el contenido se filtra según estándares de seguridad infantil.' },
    page_title_home:    { tr:'Faby – Yapay Zeka Masal Oluşturucu', en:'Faby – AI Story Creator', zh:'Faby – AI故事创作', fr:'Faby – Créateur de contes IA', hi:'Faby – AI कहानी निर्माता', ar:'Faby – منشئ قصص بالذكاء الاصطناعي', es:'Faby – Creador de cuentos IA' },
    page_title_features:{ tr:'Özellikler – Faby | Yapay Zeka Masal Oluşturucu', en:'Features – Faby | AI Story Creator', zh:'功能 – Faby', fr:'Fonctionnalités – Faby', hi:'विशेषताएं – Faby', ar:'الميزات – Faby', es:'Características – Faby' },
    page_title_stories: { tr:'Masallar – Faby | Masal Kütüphanesi', en:'Stories – Faby | Story Library', zh:'故事 – Faby', fr:'Contes – Faby', hi:'कहानियाँ – Faby', ar:'القصص – Faby', es:'Cuentos – Faby' },
    page_title_blog:    { tr:'Blog – Faby | Ebeveyn Rehberi', en:'Blog – Faby | Parent Guide', zh:'博客 – Faby', fr:'Blog – Faby', hi:'ब्लॉग – Faby', ar:'المدونة – Faby', es:'Blog – Faby' },
    feat_cta:      { tr:'Tüm Özellikleri Keşfet', en:'Explore All Features', zh:'探索所有功能', fr:'Découvrir toutes les fonctionnalités', hi:'सभी सुविधाएँ खोजें', ar:'اكتشف جميع الميزات', es:'Explorar todas las características' },
    // -- Classic tales section --
    tales_badge:   { tr:'Klasik Masallar', en:'Classic Tales', zh:'经典童话', fr:'Contes classiques', hi:'क्लासिक कथाएं', ar:'حكايات كلاسيكية', es:'Cuentos clásicos' },
    tales_title_1: { tr:'Dünyanın En Sevilen', en:"The World's Most Beloved", zh:'世界上最受欢迎的', fr:'Les contes les plus aimés', hi:'दुनिया की सबसे प्रिय', ar:'أحب حكايات', es:'Los cuentos más queridos' },
    tales_title_hl:{ tr:'Masalları', en:'Tales', zh:'童话', fr:'du monde', hi:'कहानियाँ', ar:'العالم', es:'del mundo' },
    tales_desc:    { tr:'Yüzyıllardır anlatılan klasik masallar, Faby ile modern bir dokunuşla çocuğunuzun yanında.', en:'Classic tales told for centuries, with a modern touch for your child.', zh:'流传数百年的经典童话，以现代方式呈现给您的孩子。', fr:'Des contes classiques racontés depuis des siècles, avec une touche moderne.', hi:'सदियों से सुनाई जाने वाली कहानियाँ, आधुनिक अंदाज़ में।', ar:'حكايات كلاسيكية تُروى منذ قرون، بلمسة عصرية.', es:'Cuentos clásicos contados durante siglos, con un toque moderno.' },
    tale1_title:   { tr:'Sindirella', en:'Cinderella', zh:'灰姑娘', fr:'Cendrillon', hi:'सिंड्रेला', ar:'سندريلا', es:'Cenicienta' },
    tale1_desc:    { tr:'Kayıp bir cam ayakkabı ve sihirli bir geceyle değişen hayatlar.', en:'A lost glass slipper and a magical night that changed lives.', zh:'一只丢失的水晶鞋和一个改变生活的神奇夜晚。', fr:'Une pantoufle de verre perdue et une nuit magique qui ont changé des vies.', hi:'खोया हुआ कांच का जूता और एक जादुई रात जिसने जिंदगी बदल दी।', ar:'حذاء زجاجي مفقود وليلة سحرية غيرت الحياة.', es:'Un zapato de cristal perdido y una noche mágica que cambiaron vidas.' },
    tale2_title:   { tr:'Çirkin Ördek Yavrusu', en:'The Ugly Duckling', zh:'丑小鸭', fr:'Le Vilain Petit Canard', hi:'बदसूरत बत्तख़', ar:'البطة القبيحة', es:'El Patito Feo' },
    tale2_desc:    { tr:'Farklı olmanın güzelliğini keşfeden küçük bir ördeğin büyüme hikayesi.', en:'A growing-up story of a little duckling discovering the beauty of being different.', zh:'一只发现与众不同之美的小鸭子的成长故事。', fr:'L\'histoire d\'un petit canard découvrant la beauté d\'être différent.', hi:'अलग होने की सुंदरता की खोज करने वाले एक छोटे बत्तख के बड़े होने की कहानी।', ar:'قصة نمو بطة صغيرة تكتشف جمال الاختلاف.', es:'Una historia de crecimiento de un patito que descubre la belleza de ser diferente.' },
    tale3_title:   { tr:'Çizmeli Kedi', en:'Puss in Boots', zh:'穿靴子的猫', fr:'Le Chat Botté', hi:'जूते वाली बिल्ली', ar:'القط ذو الحذاء', es:'El Gato con Botas' },
    tale3_desc:    { tr:'Zekası ve kurnazlığıyla sahibine şans getiren eşsiz bir kedinin maceraları.', en:'Adventures of a unique cat bringing luck to his master with intelligence and cunning.', zh:'一只用智慧和狡猾给主人带来好运的独特猫的冒险。', fr:'Les aventures d\'un chat unique apportant de la chance à son maître.', hi:'बुद्धिमत्ता से अपने गुरु के लिए भाग्य लाने वाली एक अनोखी बिल्ली का साहसिक कार्य।', ar:'مغامرات قط فريد يجلب الحظ لسيده بذكائه ومكره.', es:'Aventuras de un gato único que trae suerte a su amo con inteligencia y astucia.' },
    tale4_title:   { tr:'Kurbağa Prens', en:'The Frog Prince', zh:'青蛙王子', fr:'Le Prince Grenouille', hi:'मेंढक राजकुमार', ar:'الأمير الضفدع', es:'El Príncipe Rana' },
    tale4_desc:    { tr:'Verilen sözlerin önemini ve gerçek sevginin gücünü anlatan klasik bir masal.', en:'A classic tale teaching the importance of promises and the power of true love.', zh:'讲述承诺的重要性和真爱的力量的经典童话。', fr:'Un conte classique enseignant l\'importance des promesses et du véritable amour.', hi:'वादों के महत्व और सच्चे प्यार की शक्ति को सिखाने वाली क्लासिक कहानी।', ar:'قصة كلاسيكية تعلم أهمية الوعود وقوة الحب الحقيقي.', es:'Un cuento clásico que enseña la importancia de las promesas y el poder del amor.' },
    tale5_title:   { tr:'Pamuk Prenses', en:'Snow White', zh:'白雪公主', fr:'Blanche-Neige', hi:'स्नो व्हाइट', ar:'بياض الثلج', es:'Blancanieves' },
    tale5_desc:    { tr:'Yedi cüceler, sihirli bir ayna ve iyiliğin her zaman kazanacağını gösteren bir hikaye.', en:'Seven dwarfs, a magic mirror, and a story showing goodness always wins.', zh:'七个小矮人、一面魔镜和展示善良总会获胜的故事。', fr:'Sept nains, un miroir magique, et la bonté qui triomphe toujours.', hi:'सात बौने, जादुई दर्पण, और अच्छाई की जीत दिखाने वाली कहानी।', ar:'سبعة أقزام ومرآة سحرية، قصة تظهر أن الخير ينتصر دائمًا.', es:'Siete enanitos, un espejo mágico, y una historia donde la bondad triunfa.' },
    tale6_title:   { tr:'Kırmızı Başlıklı Kız', en:'Little Red Riding Hood', zh:'小红帽', fr:'Le Petit Chaperon Rouge', hi:'लाल टोपी वाली लड़की', ar:'ذات الرداء الأحمر', es:'Caperucita Roja' },
    tale6_desc:    { tr:'Büyükannesine kurabiye götüren küçük kızın ormandaki unutulmaz macerası.', en:'An unforgettable adventure in the forest of a little girl taking cookies to her grandmother.', zh:'一个小女孩带饼干给外婆的森林难忘冒险。', fr:'L\'aventure inoubliable d\'une petite fille portant des biscuits à sa grand-mère.', hi:'अपनी दादी को कुकीज़ ले जा रही लड़की का जंगल में साहसिक कार्य।', ar:'مغامرة لا تُنسى في الغابة لفتاة صغيرة تأخذ الكعك لجدتها.', es:'Una aventura inolvidable de una niña llevando galletas a su abuelita.' },
    tales_more:    { tr:'Ve çok daha fazlası Faby kütüphanesinde sizi bekliyor...', en:'And so many more waiting for you in the Faby library...', zh:'还有更多在 Faby 图书馆等着您...', fr:'Et bien d\'autres vous attendent dans la bibliothèque Faby...', hi:'और बहुत कुछ Faby पुस्तकालय में आपका इंतज़ार कर रहा है...', ar:'والكثير بانتظارك في مكتبة Faby...', es:'Y muchos más te esperan en la biblioteca de Faby...' },
    // -- Parents/Benefits section --
    parents_badge: { tr:'Ebeveynler İçin', en:'For Parents', zh:'家长专区', fr:'Pour les parents', hi:'माता-पिता के लिए', ar:'للأهل', es:'Para padres' },
    parents_t1:    { tr:'Eğitici ve', en:'Educational and', zh:'教育性', fr:'Éducatif et', hi:'शैक्षिक और', ar:'تعليمي و', es:'Educativo y' },
    parents_thl:   { tr:'Geliştirici', en:'Developmental', zh:'发展性', fr:'Développeur', hi:'विकासात्मक', ar:'تنموي', es:'Formativo' },
    parents_desc:  { tr:'Masallar sadece eğlence değil, çocuğunuzun gelişimi için güçlü bir araçtır.', en:'Stories are not just entertainment, they are a powerful tool for your child\'s development.', zh:'故事不仅是娱乐，更是孩子发展的有力工具。', fr:'Les contes ne sont pas que du divertissement, c\'est un outil puissant.', hi:'कहानियाँ सिर्फ़ मनोरंजन नहीं, विकास का शक्तिशाली साधन हैं।', ar:'القصص ليست مجرد ترفيه، بل أداة قوية لنمو طفلك.', es:'Los cuentos no son solo entretenimiento, son una herramienta poderosa.' },
    ben1_title:    { tr:'Hayal Gücünü Geliştirir', en:'Develops Imagination', zh:'发展想象力', fr:"Développe l'imagination", hi:'कल्पना शक्ति बढ़ाता है', ar:'ينمي الخيال', es:'Desarrolla la imaginación' },
    ben1_desc:     { tr:'Her yeni masal, çocuğunuzun yaratıcı düşünme yeteneğini besler ve hayal dünyasını genişletir.', en:'Every new tale nurtures creative thinking and expands imagination.', zh:'每个新故事培养创造性思维，扩展想象力。', fr:'Chaque nouveau conte nourrit la pensée créative.', hi:'हर नई कहानी रचनात्मक सोच को पोषित करती है।', ar:'كل قصة جديدة تغذي التفكير الإبداعي وتوسع الخيال.', es:'Cada nuevo cuento nutre el pensamiento creativo.' },
    ben2_title:    { tr:'Okuma Alışkanlığı Kazandırır', en:'Builds Reading Habits', zh:'培养阅读习惯', fr:'Crée des habitudes de lecture', hi:'पढ़ने की आदत बनाता है', ar:'يبني عادة القراءة', es:'Crea hábitos de lectura' },
    ben2_desc:     { tr:'Kişiselleştirilmiş hikayeler sayesinde çocuğunuz okumayı sevmeye ve alışkanlık edinmeye başlar.', en:'Personalized stories help your child love reading.', zh:'个性化故事帮助孩子爱上阅读。', fr:'Les histoires personnalisées aident à aimer la lecture.', hi:'व्यक्तिगत कहानियाँ पढ़ने की प्रेम विकसित करती हैं।', ar:'القصص المخصصة تساعد طفلك على حب القراءة.', es:'Las historias personalizadas ayudan a amar la lectura.' },
    ben3_title:    { tr:'Eğlenerek Öğrenme', en:'Learning Through Fun', zh:'寓教于乐', fr:'Apprendre en s\'amusant', hi:'मज़े से सीखना', ar:'التعلم بالمرح', es:'Aprender jugando' },
    ben3_desc:     { tr:'Masallar içine yerleştirilmiş eğitici unsurlarla çocuğunuz farkında olmadan yeni şeyler öğrenir.', en:'Educational elements woven into stories help children learn without realizing.', zh:'融入故事中的教育元素让孩子不知不觉中学习。', fr:'Des éléments éducatifs intégrés dans les contes.', hi:'कहानियों में बुने गए शैक्षिक तत्व बच्चों को सिखाते हैं।', ar:'عناصر تعليمية مدمجة في القصص.', es:'Elementos educativos en los cuentos ayudan a aprender.' },
    ben4_title:    { tr:'Dil Gelişimini Destekler', en:'Supports Language Development', zh:'支持语言发展', fr:'Soutient le développement linguistique', hi:'भाषा विकास में सहायक', ar:'يدعم تطوير اللغة', es:'Apoya el desarrollo del lenguaje' },
    ben4_desc:     { tr:'Zengin kelime hazinesi ve doğru cümle yapıları ile çocuğunuzun dil becerilerini güçlendirir.', en:'Rich vocabulary and proper sentence structures strengthen language skills.', zh:'丰富的词汇和正确的句子结构增强语言技能。', fr:'Un vocabulaire riche renforce les compétences linguistiques.', hi:'समृद्ध शब्दावली भाषा कौशल को मजबूत करती है।', ar:'مفردات غنية تعزز المهارات اللغوية.', es:'Vocabulario rico y estructuras correctas fortalecen habilidades lingüísticas.' },
    ben5_title:    { tr:'Duygusal Zekayı Artırır', en:'Boosts Emotional Intelligence', zh:'提高情商', fr:"Augmente l'intelligence émotionnelle", hi:'भावनात्मक बुद्धि बढ़ाता है', ar:'يعزز الذكاء العاطفي', es:'Aumenta la inteligencia emocional' },
    ben5_desc:     { tr:'Hikayedeki karakterlerle empati kurarak duygusal farkındalık ve sosyal beceriler gelişir.', en:'Empathizing with characters develops emotional awareness and social skills.', zh:'与角色共情培养情感意识和社交技能。', fr:'L\'empathie avec les personnages développe la conscience émotionnelle.', hi:'पात्रों से सहानुभूति भावनात्मक जागरूकता विकसित करती है।', ar:'التعاطف مع الشخصيات ينمي الوعي العاطفي.', es:'Empatizar con personajes desarrolla conciencia emocional.' },
    ben6_title:    { tr:'Huzurlu Uyku Rutini', en:'Peaceful Sleep Routine', zh:'安宁的睡眠', fr:'Routine de sommeil paisible', hi:'शांतिपूर्ण नींद दिनचर्या', ar:'روتين نوم هادئ', es:'Rutina de sueño tranquila' },
    ben6_desc:     { tr:'Uyku öncesi hikaye ritüeli ile çocuğunuz daha rahat ve huzurlu bir uykuya dalacaktır.', en:'A bedtime story ritual helps your child fall asleep more peacefully.', zh:'睡前故事仪式帮助孩子更安宁地入睡。', fr:'Un rituel d\'histoire au coucher aide votre enfant à s\'endormir paisiblement.', hi:'सोने से पहले कहानी से बच्चा शांति से सोता है।', ar:'طقوس قصة ما قبل النوم تساعد طفلك على النوم بسلام.', es:'Un ritual de cuento ayuda a dormir más tranquilo.' },
    // -- Testimonials --
    test_badge:    { tr:'Kullanıcı Yorumları', en:'User Reviews', zh:'用户评价', fr:'Avis des utilisateurs', hi:'उपयोगकर्ता समीक्षाएं', ar:'آراء المستخدمين', es:'Opiniones de usuarios' },
    test_title_1:  { tr:'Ebeveynler', en:'What Parents', zh:'家长们', fr:'Que disent', hi:'माता-पिता', ar:'ماذا يقول', es:'¿Qué dicen' },
    test_title_hl: { tr:'Ne Diyor?', en:'Are Saying?', zh:'怎么说？', fr:'les parents ?', hi:'क्या कहते हैं?', ar:'الآباء؟', es:'los padres?' },
    // -- Screenshots --
    ss_title_1:    { tr:'Bir Göz', en:'Take a', zh:'来看', fr:'Jetez un', hi:'एक नज़र', ar:'ألقِ', es:'Echa un' },
    ss_title_hl:   { tr:'Atın', en:'Look', zh:'一看', fr:'Coup d\'œil', hi:'डालें', ar:'نظرة', es:'Vistazo' },
    ss_desc:       { tr:"Faby'nun büyüleyici dünyasını keşfedin.", en:"Discover Faby's enchanting world.", zh:'探索Faby的迷人世界。', fr:'Découvrez le monde enchanteur de Faby.', hi:'Faby की मनमोहक दुनिया खोजें।', ar:'اكتشف عالم Faby الساحر.', es:'Descubre el mundo encantador de Faby.' },
    // -- FAQ --
    faq_badge:     { tr:'SSS', en:'FAQ', zh:'常见问题', fr:'FAQ', hi:'सामान्य प्रश्न', ar:'الأسئلة الشائعة', es:'FAQ' },
    faq_title:     { tr:'Sıkça Sorulan Sorular', en:'Frequently Asked Questions', zh:'常见问题', fr:'Questions fréquentes', hi:'अक्सर पूछे जाने वाले प्रश्न', ar:'الأسئلة الشائعة', es:'Preguntas frecuentes' },
    faq1_q:        { tr:'Faby uygulaması ücretsiz mi?', en:'Is Faby free?', zh:'Faby免费吗？', fr:'Faby est-il gratuit ?', hi:'क्या Faby मुफ़्त है?', ar:'هل Faby مجاني؟', es:'¿Es Faby gratis?' },
    faq1_a:        { tr:'Evet, Faby\'yu ücretsiz indirebilir ve temel özellikleri kullanabilirsiniz. Sınırsız masal oluşturma ve premium özellikler için uygun fiyatlı abonelik seçenekleri mevcuttur.', en:'Yes, you can download Faby for free and use basic features. Affordable subscription options are available for unlimited story creation and premium features.', zh:'是的，您可以免费下载Faby并使用基本功能。无限创作和高级功能可选择实惠的订阅。', fr:'Oui, vous pouvez télécharger Faby gratuitement. Des abonnements abordables sont disponibles pour les fonctionnalités premium.', hi:'हाँ, Faby मुफ़्त में डाउनलोड कर सकते हैं। प्रीमियम सुविधाओं के लिए सदस्यता उपलब्ध है।', ar:'نعم، يمكنك تحميل Faby مجانًا. اشتراكات بأسعار معقولة للميزات المميزة.', es:'Sí, puede descargar Faby gratis. Hay suscripciones asequibles para funciones premium.' },
    faq2_q:        { tr:'Hangi yaş grubuna uygun?', en:'What age group is it for?', zh:'适合什么年龄段？', fr:'Pour quel groupe d\'âge ?', hi:'किस आयु वर्ग के लिए है?', ar:'لأي فئة عمرية؟', es:'¿Para qué grupo de edad?' },
    faq2_a:        { tr:'Faby, 2-12 yaş arası çocuklar için tasarlanmıştır. Yapay zeka, çocuğunuzun yaşına uygun dil ve içerik seviyesini otomatik olarak ayarlar.', en:'Faby is designed for children aged 2-12. AI automatically adjusts language and content level for your child\'s age.', zh:'Faby专为2-12岁儿童设计。AI自动调整适合孩子年龄的语言和内容。', fr:'Faby est conçu pour les enfants de 2 à 12 ans. L\'IA ajuste automatiquement le niveau.', hi:'Faby 2-12 साल के बच्चों के लिए है। AI स्वचालित रूप से स्तर समायोजित करता है।', ar:'Faby مصمم للأطفال من 2 إلى 12 عامًا. يضبط الذكاء الاصطناعي المستوى تلقائيًا.', es:'Faby es para niños de 2 a 12 años. La IA ajusta automáticamente el nivel.' },
    faq3_q:        { tr:'Masallar nasıl kişiselleştiriliyor?', en:'How are stories personalized?', zh:'故事如何个性化？', fr:'Comment les contes sont-ils personnalisés ?', hi:'कहानियाँ कैसे व्यक्तिगत होती हैं?', ar:'كيف يتم تخصيص القصص؟', es:'¿Cómo se personalizan los cuentos?' },
    faq3_a:        { tr:'Çocuğunuzun adını, yaşını, ilgi alanlarını ve istediğiniz temayı girerek tamamen benzersiz masallar oluşturabilirsiniz.', en:'Enter your child\'s name, age, interests and desired theme to create completely unique stories.', zh:'输入孩子的名字、年龄、兴趣和主题来创建完全独特的故事。', fr:'Entrez le nom, l\'âge, les intérêts de votre enfant pour créer des contes uniques.', hi:'बच्चे का नाम, उम्र, रुचियां दर्ज करें और अनूठी कहानियां बनाएं।', ar:'أدخل اسم طفلك وعمره واهتماماته لإنشاء قصص فريدة.', es:'Ingrese el nombre, edad e intereses de su hijo para crear cuentos únicos.' },
    faq4_q:        { tr:'İçerikler güvenli mi?', en:'Is the content safe?', zh:'内容安全吗？', fr:'Le contenu est-il sûr ?', hi:'क्या सामग्री सुरक्षित है?', ar:'هل المحتوى آمن؟', es:'¿Es seguro el contenido?' },
    faq4_a:        { tr:'Kesinlikle. Tüm içerikler çocuk güvenliği uzmanları tarafından denetlenmektedir. Yapay zeka filtreleri ile uygunsuz içerik oluşturulması engellenir.', en:'Absolutely. All content is supervised by child safety experts. AI filters prevent inappropriate content.', zh:'绝对安全。所有内容由儿童安全专家监督。AI过滤器防止不当内容。', fr:'Absolument. Tout le contenu est supervisé par des experts en sécurité des enfants.', hi:'बिल्कुल। सारी सामग्री बाल सुरक्षा विशेषज्ञों द्वारा जांची जाती है।', ar:'بالتأكيد. جميع المحتويات تحت إشراف خبراء سلامة الأطفال.', es:'Absolutamente. Todo el contenido es supervisado por expertos en seguridad infantil.' },
    // -- Blog preview --
    blog_title_1:  { tr:'Faydalı', en:'Useful', zh:'有用的', fr:'Contenu', hi:'उपयोगी', ar:'محتوى', es:'Contenido' },
    blog_title_hl: { tr:'İçerikler', en:'Content', zh:'内容', fr:'Utile', hi:'सामग्री', ar:'مفيد', es:'Útil' },
    blog_cta:      { tr:'Tüm Yazıları Oku', en:'Read All Posts', zh:'阅读所有文章', fr:'Lire tous les articles', hi:'सभी लेख पढ़ें', ar:'اقرأ جميع المقالات', es:'Leer todos los artículos' },
    blog_read:     { tr:'Yazıyı Oku', en:'Read Article', zh:'阅读文章', fr:'Lire l\'article', hi:'लेख पढ़ें', ar:'اقرأ المقال', es:'Leer artículo' },
    back_to_blog:  { tr:'← Tüm Blog Yazıları', en:'← All Blog Posts', zh:'← 所有文章', fr:'← Tous les articles', hi:'← सभी लेख', ar:'← جميع المقالات', es:'← Todos los artículos' },
    blog1_tag:     { tr:'Çocuk Gelişimi', en:'Child Development', zh:'儿童发展', fr:'Développement de l\'enfant', hi:'बाल विकास', ar:'نمو الطفل', es:'Desarrollo infantil' },
    blog1_title:   { tr:'Masal Okumanın Çocuk Gelişimine Faydaları', en:'Benefits of Reading Fairy Tales for Child Development', zh:'阅读童话对儿童发展的好处', fr:'Les bienfaits de la lecture de contes', hi:'परी कथाओं से बाल विकास के लाभ', ar:'فوائد قراءة القصص لنمو الطفل', es:'Beneficios de leer cuentos para el desarrollo infantil' },
    blog1_desc:    { tr:'Düzenli masal dinleyen çocukların dil gelişimi ve hayal gücü çok daha hızlı gelişiyor.', en:'Children who regularly listen to fairy tales develop language and imagination faster.', zh:'经常听童话的孩子语言和想象力发展更快。', fr:'Les enfants qui écoutent régulièrement des contes développent leur langage plus vite.', hi:'नियमित कहानियाँ सुनने वाले बच्चों का विकास तेज़ होता है।', ar:'الأطفال الذين يستمعون للقصص بانتظام يتطورون أسرع.', es:'Los niños que escuchan cuentos regularmente se desarrollan más rápido.' },
    blog2_tag:     { tr:'Ebeveyn Rehberi', en:'Parent Guide', zh:'家长指南', fr:'Guide parental', hi:'पैरेंट गाइड', ar:'دليل الأهل', es:'Guía para padres' },
    blog2_title:   { tr:'Uyku Öncesi Hikaye Okumanın Önemi', en:'The Importance of Bedtime Stories', zh:'睡前故事的重要性', fr:"L'importance des histoires au coucher", hi:'सोने से पहले कहानी का महत्व', ar:'أهمية قصص ما قبل النوم', es:'La importancia de los cuentos antes de dormir' },
    blog2_desc:    { tr:'Uyku öncesi hikaye ritüeli, çocuğunuzun daha huzurlu uyumasını sağlar.', en:'A bedtime story ritual helps your child sleep more peacefully.', zh:'睡前故事仪式帮助孩子更安宁地入睡。', fr:'Un rituel d\'histoire au coucher aide votre enfant à mieux dormir.', hi:'सोने से पहले कहानी बच्चे को शांति से सुलाती है।', ar:'طقوس القصة قبل النوم تساعد طفلك على النوم بسلام.', es:'Un ritual de cuento ayuda a dormir más tranquilo.' },
    blog3_tag:     { tr:'Yaratıcılık', en:'Creativity', zh:'创造力', fr:'Créativité', hi:'रचनात्मकता', ar:'الإبداع', es:'Creatividad' },
    blog3_title:   { tr:'Çocukların Hayal Gücü Nasıl Geliştirilir?', en:'How to Develop Children\'s Imagination?', zh:'如何培养儿童的想象力？', fr:"Comment développer l'imagination des enfants ?", hi:'बच्चों की कल्पना शक्ति कैसे विकसित करें?', ar:'كيف تنمي خيال الأطفال؟', es:'¿Cómo desarrollar la imaginación de los niños?' },
    blog3_desc:    { tr:'Hayal gücü, çocukların yaratıcılığının ve problem çözme yeteneğinin temelidir.', en:'Imagination is the foundation of creativity and problem-solving for children.', zh:'想象力是儿童创造力和解决问题能力的基础。', fr:"L'imagination est le fondement de la créativité des enfants.", hi:'कल्पना शक्ति बच्चों की रचनात्मकता की नींव है।', ar:'الخيال هو أساس إبداع الأطفال وقدرتهم على حل المشكلات.', es:'La imaginación es la base de la creatividad y resolución de problemas.' },
    blog4_tag:     { tr:'Yapay Zeka', en:'Artificial Intelligence', zh:'人工智能', fr:'Intelligence artificielle', hi:'कृत्रिम बुद्धिमत्ता', ar:'الذكاء الاصطناعي', es:'Inteligencia artificial' },
    blog4_title:   { tr:'Yapay Zeka ile Kişiselleştirilmiş Çocuk Masalları Nasıl Oluşturulur?', en:'How to Create Personalized Children\'s Stories with AI?', zh:'如何用人工智能创作个性化儿童故事？', fr:'Comment créer des contes personnalisés avec l\'IA ?', hi:'AI से व्यक्तिगत बच्चों की कहानियाँ कैसे बनाएं?', ar:'كيف تصنع قصص أطفال مخصصة بالذكاء الاصطناعي؟', es:'¿Cómo crear cuentos infantiles personalizados con IA?' },
    blog4_desc:    { tr:'Yapay zeka teknolojisi, çocuğunuzun adı, ilgi alanları ve yaşına göre benzersiz masallar üretiyor.', en:'AI technology creates unique stories based on your child\'s name, interests, and age.', zh:'AI技术根据孩子的姓名、兴趣和年龄创造独特的故事。', fr:'La technologie IA crée des histoires uniques selon le nom, les intérêts et l\'âge de votre enfant.', hi:'AI तकनीक आपके बच्चे के नाम, रुचियों और उम्र के अनुसार कहानियाँ बनाती है।', ar:'تقنية الذكاء الاصطناعي تنشئ قصصاً فريدة بناءً على اسم طفلك واهتماماته وعمره.', es:'La tecnología IA crea historias únicas basadas en el nombre, intereses y edad de tu hijo.' },
    blog5_tag:     { tr:'Dijital Ebeveynlik', en:'Digital Parenting', zh:'数字育儿', fr:'Parentalité numérique', hi:'डिजिटल पेरेंटिंग', ar:'التربية الرقمية', es:'Crianza digital' },
    blog5_title:   { tr:'Çocuklarda Ekran Süresi Yönetimi: Eğitici Uygulama Rehberi', en:'Screen Time Management for Kids: Educational App Guide', zh:'儿童屏幕时间管理：教育应用指南', fr:'Gestion du temps d\'écran : guide des applications éducatives', hi:'बच्चों में स्क्रीन टाइम प्रबंधन: शैक्षिक ऐप गाइड', ar:'إدارة وقت الشاشة للأطفال: دليل التطبيقات التعليمية', es:'Gestión del tiempo de pantalla: guía de apps educativas' },
    blog5_desc:    { tr:'Ekran süresini verimli kullanmanın yolları ve eğitici dijital içeriklerle kaliteli zaman geçirme ipuçları.', en:'Tips for productive screen time and quality moments with educational digital content.', zh:'高效利用屏幕时间的方法和与教育数字内容共度优质时光的技巧。', fr:'Conseils pour un temps d\'écran productif avec du contenu éducatif de qualité.', hi:'स्क्रीन टाइम को उत्पादक बनाने और शैक्षिक सामग्री के साथ गुणवत्ता समय बिताने के टिप्स।', ar:'نصائح لوقت شاشة منتج ولحظات جيدة مع المحتوى الرقمي التعليمي.', es:'Consejos para un tiempo de pantalla productivo con contenido educativo digital.' },
    blog6_tag:     { tr:'Dil Gelişimi', en:'Language Development', zh:'语言发展', fr:'Développement linguistique', hi:'भाषा विकास', ar:'تطور اللغة', es:'Desarrollo del lenguaje' },
    blog6_title:   { tr:'Masallarla Çok Dilli Çocuk Yetiştirmek: Erken Yaşta Dil Öğrenimi', en:'Raising Multilingual Kids with Stories: Early Language Learning', zh:'用故事培养多语言儿童：幼儿语言学习', fr:'Élever des enfants multilingues avec les contes', hi:'कहानियों से बहुभाषी बच्चे की परवरिश: प्रारंभिक भाषा सीखना', ar:'تربية أطفال متعددي اللغات بالقصص: تعلم اللغة المبكر', es:'Criar niños multilingües con cuentos: aprendizaje temprano de idiomas' },
    blog6_desc:    { tr:'Çocukların birden fazla dili aynı anda öğrenmesi için masallar en etkili ve doğal yöntemlerden biri.', en:'Stories are one of the most effective and natural methods for children to learn multiple languages simultaneously.', zh:'故事是儿童同时学习多种语言最有效和自然的方法之一。', fr:'Les contes sont l\'un des moyens les plus naturels pour apprendre plusieurs langues.', hi:'कहानियाँ बच्चों के लिए एक साथ कई भाषाएँ सीखने का सबसे प्रभावी तरीका है।', ar:'القصص من أكثر الطرق فعالية وطبيعية لتعلم الأطفال لغات متعددة.', es:'Los cuentos son uno de los métodos más efectivos y naturales para aprender varios idiomas.' },
    // -- CTA / Download --
    cta_badge:     { tr:'Ücretsiz indirin, hemen başlayın', en:'Download free, start now', zh:'免费下载，立即开始', fr:'Téléchargez gratuitement', hi:'मुफ़्त डाउनलोड करें', ar:'حمّل مجانًا، ابدأ الآن', es:'Descarga gratis, empieza ahora' },
    cta_title_1:   { tr:'Çocuğunuzun Masal', en:"Start Your Child's", zh:'开始孩子的', fr:'Lancez le voyage', hi:'अपने बच्चे की कहानी', ar:'ابدأ رحلة', es:'Comience el viaje' },
    cta_title_2:   { tr:'Yolculuğunu Başlatın', en:'Story Journey', zh:'故事旅程', fr:'de contes de votre enfant', hi:'यात्रा शुरू करें', ar:'حكايات طفلك', es:'de cuentos de su hijo' },
    cta_desc:      { tr:'Her gece yeni bir macera, her hikayede yeni bir ders. Faby ile çocuğunuzun dünyasını büyülü masallarla doldurun.', en:'A new adventure every night, a new lesson in every story. Fill your child\'s world with magical tales.', zh:'每晚一个新冒险，每个故事一个新课程。用魔法故事填满孩子的世界。', fr:'Une nouvelle aventure chaque soir. Remplissez le monde de votre enfant de contes magiques.', hi:'हर रात एक नया रोमांच। जादुई कहानियों से बच्चे की दुनिया भरें।', ar:'مغامرة جديدة كل ليلة. املأ عالم طفلك بالحكايات السحرية.', es:'Una nueva aventura cada noche. Llene el mundo de su hijo con cuentos mágicos.' },
    // -- Footer --
    footer_desc:   { tr:'Yapay zeka destekli kişiselleştirilmiş çocuk masalları uygulaması. Her çocuk kendi hikayesinin kahramanı.', en:'AI-powered personalized children\'s fairy tale app. Every child is the hero of their own story.', zh:'AI驱动的个性化儿童童话应用。每个孩子都是自己故事的主角。', fr:'Application de contes personnalisés par IA. Chaque enfant est le héros de son histoire.', hi:'AI-संचालित व्यक्तिगत बच्चों की परी कथा ऐप।', ar:'تطبيق قصص أطفال مخصصة بالذكاء الاصطناعي.', es:'App de cuentos infantiles personalizados con IA.' },
    footer_app:    { tr:'Uygulama', en:'App', zh:'应用', fr:'Application', hi:'ऐप', ar:'التطبيق', es:'App' },
    footer_feat:   { tr:'Özellikler', en:'Features', zh:'功能', fr:'Fonctionnalités', hi:'विशेषताएं', ar:'المميزات', es:'Características' },
    footer_dl:     { tr:'İndir', en:'Download', zh:'下载', fr:'Télécharger', hi:'डाउनलोड', ar:'تحميل', es:'Descargar' },
    footer_faq:    { tr:'SSS', en:'FAQ', zh:'常见问题', fr:'FAQ', hi:'सामान्य प्रश्न', ar:'الأسئلة الشائعة', es:'FAQ' },
    footer_contact:{ tr:'İletişim', en:'Contact', zh:'联系', fr:'Contact', hi:'संपर्क', ar:'اتصل بنا', es:'Contacto' },
    footer_legal:  { tr:'Yasal', en:'Legal', zh:'法律', fr:'Légal', hi:'कानूनी', ar:'قانوني', es:'Legal' },
    footer_terms:  { tr:'Kullanıcı Sözleşmesi', en:'Terms of Service', zh:'服务条款', fr:'Conditions d\'utilisation', hi:'सेवा की शर्तें', ar:'شروط الخدمة', es:'Términos de servicio' },
    footer_privacy:{ tr:'Gizlilik Politikası', en:'Privacy Policy', zh:'隐私政策', fr:'Politique de confidentialité', hi:'गोपनीयता नीति', ar:'سياسة الخصوصية', es:'Política de privacidad' },
    footer_kvkk:   { tr:'KVKK', en:'Data Protection', zh:'数据保护', fr:'Protection des données', hi:'डेटा संरक्षण', ar:'حماية البيانات', es:'Protección de datos' },
    footer_eula:   { tr:'Son Kullanıcı Lisans Sözleşmesi', en:'EULA', zh:'最终用户许可协议', fr:'CLUF', hi:'EULA', ar:'اتفاقية المستخدم النهائي', es:'EULA' },
    back_to_blog:  { tr:'← Tüm Blog Yazıları', en:'← All Blog Posts', zh:'← 所有博客文章', fr:'← Tous les articles', hi:'← सभी ब्लॉग पोस्ट', ar:'← جميع المقالات', es:'← Todos los artículos' },
    footer_copy:   { tr:'Tüm hakları saklıdır.', en:'All rights reserved.', zh:'版权所有。', fr:'Tous droits réservés.', hi:'सर्वाधिकार सुरक्षित।', ar:'جميع الحقوق محفوظة.', es:'Todos los derechos reservados.' },
    footer_made:   { tr:'Hassasiyetle tasarlandı. Çocuklar için sevgiyle yapıldı.', en:'Designed with care. Made with love for children.', zh:'用心设计，为孩子们充满爱地制作。', fr:'Conçu avec soin. Fait avec amour pour les enfants.', hi:'देखभाल से डिज़ाइन। बच्चों के लिए प्यार से बना।', ar:'صُمم بعناية. صُنع بحب للأطفال.', es:'Diseñado con cuidado. Hecho con amor para los niños.' },
    // -- Scroll hint --
    scroll_hint: { tr:'Keşfet', en:'Explore', zh:'探索', fr:'Explorer', hi:'खोजें', ar:'اكتشف', es:'Explorar' },
    tales_explore_cta: { tr:'Tüm Masalları Keşfet', en:'Explore All Tales', zh:'探索所有童话', fr:'Découvrir tous les contes', hi:'सभी कहानियाँ खोजें', ar:'اكتشف جميع الحكايات', es:'Explorar todos los cuentos' },
    // -- Extra classic tales list --
    extra_tales_title: { tr:'Ve Daha Birçok Klasik Masal...', en:'And Many More Classic Tales...', zh:'还有更多经典童话...', fr:'Et bien d\'autres contes classiques...', hi:'और भी कई क्लासिक कहानियाँ...', ar:'والمزيد من الحكايات الكلاسيكية...', es:'Y muchos más cuentos clásicos...' },
    extra1:  { tr:'Rapunzel', en:'Rapunzel', zh:'长发公主', fr:'Raiponce', hi:'रॅपन्ज़ेल', ar:'رابونزل', es:'Rapunzel' },
    extra2:  { tr:'Hansel ve Gretel', en:'Hansel and Gretel', zh:'韩塞尔与格蕾特', fr:'Hansel et Gretel', hi:'हैंसल और ग्रेटल', ar:'هانسل وغريتل', es:'Hansel y Gretel' },
    extra3:  { tr:'Uyuyan Güzel', en:'Sleeping Beauty', zh:'睡美人', fr:'La Belle au Bois Dormant', hi:'सोती हुई सुंदरी', ar:'الجميلة النائمة', es:'La Bella Durmiente' },
    extra4:  { tr:'Pinokyo', en:'Pinocchio', zh:'匹诺曹', fr:'Pinocchio', hi:'पिनोकियो', ar:'بينوكيو', es:'Pinocho' },
    extra5:  { tr:'Küçük Deniz Kızı', en:'The Little Mermaid', zh:'小美人鱼', fr:'La Petite Sirène', hi:'छोटी जलपरी', ar:'حورية البحر الصغيرة', es:'La Sirenita' },
    extra6:  { tr:'Bremen Mızıkacıları', en:'The Bremen Town Musicians', zh:'不来梅的城市乐手', fr:'Les Musiciens de Brême', hi:'ब्रेमेन के संगीतकार', ar:'موسيقيو بريمن', es:'Los Músicos de Bremen' },
    extra7:  { tr:'Jack ve Fasulye Sırığı', en:'Jack and the Beanstalk', zh:'杰克与魔豆', fr:'Jack et le Haricot Magique', hi:'जैक और बीनस्टॉक', ar:'جاك وشجرة الفاصولياء', es:'Jack y las Habichuelas Mágicas' },
    extra8:  { tr:'Üç Küçük Domuz', en:'Three Little Pigs', zh:'三只小猪', fr:'Les Trois Petits Cochons', hi:'तीन छोटे सूअर', ar:'الخنازير الثلاثة الصغيرة', es:'Los Tres Cerditos' },
    extra9:  { tr:'Ali Baba ve Kırk Haramiler', en:'Ali Baba and the Forty Thieves', zh:'阿里巴巴与四十大盗', fr:'Ali Baba et les Quarante Voleurs', hi:'अली बाबा और चालीस चोर', ar:'علي بابا والأربعون لصًا', es:'Alí Babá y los Cuarenta Ladrones' },
    extra10: { tr:'Alaaddin\'in Sihirli Lambası', en:'Aladdin\'s Magic Lamp', zh:'阿拉丁神灯', fr:'Aladin et la Lampe Merveilleuse', hi:'अलादीन का जादुई चिराग', ar:'علاء الدين والمصباح السحري', es:'Aladino y la Lámpara Maravillosa' },
    extra11: { tr:'Kar Kraliçesi', en:'The Snow Queen', zh:'冰雪女王', fr:'La Reine des Neiges', hi:'बर्फ की रानी', ar:'ملكة الثلج', es:'La Reina de las Nieves' },
    extra12: { tr:'Altın Saçlı Kız ve Üç Ayı', en:'Goldilocks and the Three Bears', zh:'金发姑娘和三只熊', fr:'Boucle d\'Or et les Trois Ours', hi:'गोल्डीलॉक्स और तीन भालू', ar:'ذات الشعر الذهبي والدببة الثلاثة', es:'Ricitos de Oro y los Tres Osos' },
    extra13: { tr:'Flüt Çalan Çoban', en:'The Pied Piper', zh:'花衣魔笛手', fr:'Le Joueur de flûte', hi:'बांसुरी वाला', ar:'عازف الناي', es:'El Flautista de Hamelín' },
    extra14: { tr:'Kurt ile Yedi Keçi Yavrusu', en:'The Wolf and the Seven Kids', zh:'狼和七只小羊', fr:'Le Loup et les Sept Chevreaux', hi:'भेड़िया और सात बकरी के बच्चे', ar:'الذئب والجديان السبعة', es:'El Lobo y los Siete Cabritillos' },
    extra15: { tr:'Parmak Çocuk', en:'Tom Thumb', zh:'拇指汤姆', fr:'Le Petit Poucet', hi:'अंगूठा छाप', ar:'الولد الإبهام', es:'Pulgarcito' },
    extra16: { tr:'Küçük Prens', en:'The Little Prince', zh:'小王子', fr:'Le Petit Prince', hi:'छोटा राजकुमार', ar:'الأمير الصغير', es:'El Principito' },
    extra17: { tr:'Kuğu Gölü', en:'Swan Lake', zh:'天鹅湖', fr:'Le Lac des Cygnes', hi:'हंस झील', ar:'بحيرة البجع', es:'El Lago de los Cisnes' },
    extra18: { tr:'Fındıkkıran', en:'The Nutcracker', zh:'胡桃夹子', fr:'Casse-Noisette', hi:'नटक्रैकर', ar:'كسارة البندق', es:'El Cascanueces' },
    extra19: { tr:'Heidi', en:'Heidi', zh:'海蒂', fr:'Heidi', hi:'हाइडी', ar:'هايدي', es:'Heidi' },
    extra20: { tr:'Orman Kitabı', en:'The Jungle Book', zh:'丛林之书', fr:'Le Livre de la Jungle', hi:'जंगल बुक', ar:'كتاب الأدغال', es:'El Libro de la Selva' },
    extra21: { tr:'Peter Pan', en:'Peter Pan', zh:'彼得·潘', fr:'Peter Pan', hi:'पीटर पैन', ar:'بيتر بان', es:'Peter Pan' },
    extra22: { tr:'Oz Büyücüsü', en:'The Wizard of Oz', zh:'绿野仙踪', fr:'Le Magicien d\'Oz', hi:'ओज़ का जादूगर', ar:'ساحر أوز', es:'El Mago de Oz' },
    extra23: { tr:'Güzel ve Çirkin', en:'Beauty and the Beast', zh:'美女与野兽', fr:'La Belle et la Bête', hi:'सुंदरी और राक्षस', ar:'الجميلة والوحش', es:'La Bella y la Bestia' },
    extra24: { tr:'Karlar Ülkesi', en:'The Snow Kingdom', zh:'冰雪王国', fr:'Le Royaume des Neiges', hi:'बर्फ का राज्य', ar:'مملكة الثلج', es:'El Reino de las Nieves' },
    extra25: { tr:'Deniz Kızı ve Yunuslar', en:'The Mermaid and Dolphins', zh:'美人鱼与海豚', fr:'La Sirène et les Dauphins', hi:'जलपरी और डॉल्फ़िन', ar:'حورية البحر والدلافين', es:'La Sirena y los Delfines' },
    extra26: { tr:'Sihirli Lamba', en:'The Magic Lamp', zh:'神灯', fr:'La Lampe Magique', hi:'जादुई चिराग', ar:'المصباح السحري', es:'La Lámpara Mágica' },
    extra27: { tr:'Robin Hood', en:'Robin Hood', zh:'罗宾汉', fr:'Robin des Bois', hi:'रॉबिन हुड', ar:'روبن هود', es:'Robin Hood' },
    extra28: { tr:'Sinbad\'ın Maceraları', en:'Sinbad the Sailor', zh:'辛巴达航海记', fr:'Sinbad le Marin', hi:'सिंदबाद नाविक', ar:'السندباد البحري', es:'Simbad el Marino' },
    extra29: { tr:'Tilki ile Üzüm', en:'The Fox and the Grapes', zh:'狐狸与葡萄', fr:'Le Renard et les Raisins', hi:'लोमड़ी और अंगूर', ar:'الثعلب والعنب', es:'La Zorra y las Uvas' },
    extra30: { tr:'Karınca ile Ağustos Böceği', en:'The Ant and the Grasshopper', zh:'蚂蚁和蚱蜢', fr:'La Cigale et la Fourmi', hi:'चींटी और टिड्डा', ar:'النملة والجندب', es:'La Cigarra y la Hormiga' },
    // -- Sub-page headers --
    page_features_title: { tr:'Sihirli', en:'Magical', zh:'神奇', fr:'Magiques', hi:'जादुई', ar:'سحرية', es:'Mágicas' },
    page_features_hl: { tr:'Özellikler', en:'Features', zh:'功能', fr:'Fonctionnalités', hi:'विशेषताएं', ar:'الميزات', es:'Características' },
    page_features_desc: { tr:'Faby\'nun sunduğu tüm özellikleri keşfedin ve çocuğunuzun masal dünyasına adım atın.', en:'Discover all features Faby offers and step into your child\'s fairy tale world.', zh:'发现Faby提供的所有功能，走进孩子的童话世界。', fr:'Découvrez toutes les fonctionnalités de Faby.', hi:'Faby की सभी सुविधाएँ खोजें।', ar:'اكتشف جميع ميزات Faby.', es:'Descubra todas las características de Faby.' },
    page_stories_title: { tr:'Masal', en:'Story', zh:'故事', fr:'Bibliothèque de', hi:'कहानी', ar:'مكتبة', es:'Biblioteca de' },
    page_stories_hl: { tr:'Kütüphanesi', en:'Library', zh:'图书馆', fr:'Contes', hi:'पुस्तकालय', ar:'القصص', es:'Cuentos' },
    page_stories_desc: { tr:'Dünyanın en sevilen klasik masalları ve yapay zeka ile oluşturulmuş benzersiz hikayeler.', en:'The world\'s most beloved classic tales and unique AI-generated stories.', zh:'世界上最受欢迎的经典童话和独特的AI故事。', fr:'Les contes classiques les plus aimés et des histoires uniques générées par IA.', hi:'दुनिया की सबसे प्रिय कहानियाँ और AI-जनित अनूठी कहानियाँ।', ar:'أحب الحكايات الكلاسيكية وقصص فريدة بالذكاء الاصطناعي.', es:'Los cuentos clásicos más queridos e historias únicas generadas por IA.' },
    page_blog_title: { tr:'Ebeveyn', en:'Parent', zh:'家长', fr:'Guide', hi:'अभिभावक', ar:'دليل', es:'Guía para' },
    page_blog_hl: { tr:'Rehberi', en:'Guide', zh:'指南', fr:'Parental', hi:'गाइड', ar:'الأهل', es:'Padres' },
    page_blog_desc: { tr:'Çocuk gelişimi, masal okumanın faydaları ve ebeveynlik hakkında uzman yazıları.', en:'Expert articles on child development, benefits of reading and parenting tips.', zh:'关于儿童发展、阅读益处和育儿技巧的专家文章。', fr:'Articles d\'experts sur le développement de l\'enfant et la parentalité.', hi:'बाल विकास और पालन-पोषण पर विशेषज्ञ लेख।', ar:'مقالات خبراء عن نمو الطفل والأبوة.', es:'Artículos expertos sobre desarrollo infantil y crianza.' },
    blog_coming_soon: { tr:'Blog yazıları çok yakında burada olacak!', en:'Blog posts coming very soon!', zh:'博客文章即将推出！', fr:'Les articles de blog arrivent très bientôt !', hi:'ब्लॉग पोस्ट बहुत जल्द आ रहे हैं!', ar:'مقالات المدونة قادمة قريبًا جدًا!', es:'¡Las publicaciones del blog llegarán muy pronto!' },
    blog_coming_desc: { tr:'Çocuk gelişimi, masal okumanın faydaları ve ebeveynlik ipuçları hakkında faydalı yazılarımızı takip edin.', en:'Follow our helpful articles on child development, reading benefits and parenting tips.', zh:'关注我们关于儿童发展、阅读益处和育儿技巧的文章。', fr:'Suivez nos articles utiles sur le développement de l\'enfant.', hi:'बाल विकास पर हमारे उपयोगी लेख पढ़ें।', ar:'تابع مقالاتنا المفيدة حول نمو الطفل.', es:'Siga nuestros artículos sobre desarrollo infantil.' },
    blog1_content: { tr:'Araştırmalar, her gece düzenli olarak masal dinleyen çocukların kelime hazinesinin akranlarına göre %30 daha geniş olduğunu gösteriyor. Masallar, çocukların soyut düşünme becerilerini geliştirirken empati kurma yeteneklerini de güçlendiriyor. Hikayedeki karakterlerle özdeşleşen çocuklar, farklı duyguları tanımayı ve anlamayı öğrenir. Ayrıca masal dinleme alışkanlığı, ileriki yaşlarda okuma sevgisinin temelini oluşturur.', en:'Research shows that children who regularly listen to fairy tales have a vocabulary 30% wider than their peers. Stories develop abstract thinking skills while strengthening empathy. Children who identify with story characters learn to recognize and understand different emotions. The habit of listening to tales also forms the foundation of a love of reading in later years.', zh:'研究表明，经常听童话故事的孩子词汇量比同龄人多30%。故事在发展抽象思维能力的同时也增强了共情能力。与故事角色产生共鸣的孩子学会识别和理解不同的情感。听故事的习惯也为日后热爱阅读奠定了基础。', fr:'Les recherches montrent que les enfants qui écoutent régulièrement des contes ont un vocabulaire 30% plus large. Les histoires développent la pensée abstraite et renforcent l\'empathie. Les enfants qui s\'identifient aux personnages apprennent à reconnaître les émotions. L\'habitude d\'écouter des contes forme la base de l\'amour de la lecture.', hi:'शोध से पता चलता है कि नियमित रूप से परी कथाएं सुनने वाले बच्चों की शब्दावली 30% अधिक होती है। कहानियां सहानुभूति को मजबूत करती हैं और अमूर्त सोच विकसित करती हैं।', ar:'تظهر الأبحاث أن الأطفال الذين يستمعون بانتظام للقصص لديهم مفردات أوسع بنسبة 30%. القصص تطور التفكير المجرد وتعزز التعاطف.', es:'Las investigaciones muestran que los niños que escuchan cuentos regularmente tienen un vocabulario 30% más amplio. Los cuentos desarrollan el pensamiento abstracto y fortalecen la empatía.' },
    blog2_content: { tr:'Uyku öncesi hikaye okuma ritüeli, çocuğun günün stresinden arınmasına ve zihinsel olarak uykuya hazırlanmasına yardımcı olur. Bu süreç, ebeveyn ile çocuk arasındaki bağı güçlendirir ve güven duygusunu pekiştirir. Uzmanlar, her gece aynı saatte 15-20 dakikalık bir hikaye okumanın uyku kalitesini önemli ölçüde artırdığını belirtiyor. Sakin bir ses tonu ve loş ışık eşliğinde okunan masallar, çocuğun doğal uyku döngüsünü destekler.', en:'A bedtime story ritual helps children decompress from the day\'s stress and mentally prepare for sleep. This process strengthens the bond between parent and child. Experts say that reading a 15-20 minute story at the same time every night significantly improves sleep quality. Stories read with a calm voice and dim lighting support the child\'s natural sleep cycle.', zh:'睡前故事仪式帮助孩子从一天的压力中解脱，为睡眠做好心理准备。这个过程加强了父母与孩子之间的纽带。专家表示，每晚同一时间阅读15-20分钟的故事能显著提高睡眠质量。', fr:'Le rituel de lecture au coucher aide l\'enfant à se détendre du stress de la journée. Ce processus renforce le lien parent-enfant. Les experts recommandent 15 à 20 minutes de lecture à la même heure chaque soir pour améliorer la qualité du sommeil.', hi:'सोने से पहले कहानी पढ़ने की दिनचर्या बच्चे को दिन के तनाव से मुक्त करती है। यह प्रक्रिया माता-पिता और बच्चे के बीच के बंधन को मजबूत करती है।', ar:'يساعد طقس قراءة القصة قبل النوم الطفل على التخلص من ضغوط اليوم. هذه العملية تقوي الرابطة بين الوالدين والطفل.', es:'El ritual de lectura antes de dormir ayuda al niño a descomprimirse del estrés del día. Este proceso fortalece el vínculo entre padres e hijos. Los expertos recomiendan 15-20 minutos de lectura a la misma hora cada noche.' },
    blog3_content: { tr:'Hayal gücü, çocukluk döneminin en değerli armağanlarından biridir. Kişiselleştirilmiş masallar, çocukların kendilerini hikayenin bir parçası olarak görmelerine olanak tanır ve bu da yaratıcı düşünmeyi tetikler. Çocuğunuzun adının geçtiği bir masalda kahraman olması, özgüvenini artırırken problem çözme becerilerini de geliştirir. Farklı senaryolar ve dünyalar hayal etmek, ileride karşılaşılacak zorluklar için esnek düşünme altyapısı oluşturur.', en:'Imagination is one of childhood\'s most valuable gifts. Personalized stories allow children to see themselves as part of the story, triggering creative thinking. Being the hero of a tale featuring their name boosts confidence while developing problem-solving skills. Imagining different scenarios builds flexible thinking for future challenges.', zh:'想象力是童年最宝贵的礼物之一。个性化故事让孩子们将自己视为故事的一部分，激发创造性思维。在以自己名字为主角的故事中成为英雄，在培养解决问题能力的同时增强自信心。', fr:'L\'imagination est l\'un des cadeaux les plus précieux de l\'enfance. Les histoires personnalisées permettent aux enfants de se voir comme partie de l\'histoire, déclenchant la pensée créative. Être le héros d\'un conte avec son propre nom renforce la confiance en soi.', hi:'कल्पना बचपन का सबसे कीमती उपहार है। व्यक्तिगत कहानियां बच्चों को कहानी का हिस्सा बनने देती हैं, जो रचनात्मक सोच को प्रेरित करती हैं।', ar:'الخيال هو أثمن هدايا الطفولة. القصص المخصصة تتيح للأطفال رؤية أنفسهم كجزء من القصة، مما يحفز التفكير الإبداعي.', es:'La imaginación es uno de los regalos más valiosos de la infancia. Las historias personalizadas permiten a los niños verse como parte de la historia, activando el pensamiento creativo.' },
    blog4_content: { tr:'Yapay zeka destekli masal oluşturma teknolojisi, geleneksel hikaye anlatıcılığını tamamen dönüştürüyor. Çocuğunuzun adını, sevdiği hayvanları, favori renklerini ve yaş grubuna uygun temalar belirleyerek saniyeler içinde özgün bir masal oluşturabilirsiniz. Bu kişiselleştirme sayesinde çocuklar hikayeye çok daha güçlü bağ kuruyor. Araştırmalar, kendi adlarının geçtiği hikayeleri dinleyen çocukların dikkat süresinin %40 arttığını gösteriyor. AI masalları ayrıca eğitici mesajlar, ahlaki değerler ve problem çözme senaryoları içerecek şekilde tasarlanabiliyor. Faby uygulaması bu teknolojiyi kullanarak her çocuğa özel, güvenli ve yaşa uygun içerikler sunuyor.', en:'AI-powered story creation technology is transforming traditional storytelling. You can generate a unique fairy tale in seconds by specifying your child\'s name, favorite animals, colors, and age-appropriate themes. This personalization helps children form much stronger connections with the story. Research shows that children who hear stories featuring their own names have a 40% longer attention span. AI stories can also be designed to include educational messages, moral values, and problem-solving scenarios. Faby uses this technology to deliver safe, age-appropriate, and personalized content for every child.', zh:'AI驱动的故事创作技术正在改变传统讲故事的方式。您可以通过指定孩子的姓名、喜爱的动物、颜色和适龄主题，在几秒钟内生成独特的童话故事。研究表明，听到包含自己名字的故事的孩子注意力持续时间增加40%。', fr:'La technologie de création d\'histoires par IA transforme la narration traditionnelle. Vous pouvez créer un conte unique en quelques secondes. Les recherches montrent que les enfants dont le nom apparaît dans l\'histoire ont une durée d\'attention 40% plus longue. Les contes IA peuvent inclure des messages éducatifs et des valeurs morales.', hi:'AI कहानी निर्माण तकनीक पारंपरिक कहानी कहने को बदल रही है। आप सेकंडों में अपने बच्चे के नाम और रुचियों के अनुसार अनूठी कहानियां बना सकते हैं। शोध से पता चलता है कि अपने नाम वाली कहानियां सुनने वाले बच्चों का ध्यान 40% अधिक रहता है।', ar:'تقنية إنشاء القصص بالذكاء الاصطناعي تحول رواية القصص التقليدية. يمكنك إنشاء حكاية فريدة في ثوانٍ. تظهر الأبحاث أن الأطفال الذين يسمعون قصصاً تحمل أسماءهم يزداد تركيزهم بنسبة 40%.', es:'La tecnología de creación de cuentos con IA está transformando la narración tradicional. Puede generar un cuento único en segundos con el nombre de su hijo. Las investigaciones muestran que los niños que escuchan historias con sus nombres tienen un 40% más de atención.' },
    blog5_content: { tr:'Dünya Sağlık Örgütü, 2-5 yaş arası çocuklar için günlük ekran süresinin 1 saati geçmemesini öneriyor. Ancak önemli olan süre kadar içeriğin kalitesidir. Eğitici masal uygulamaları, pasif video izleme yerine aktif katılım sağlayarak ekran süresini verimli hale getirir. Çocuğunuzla birlikte hikaye seçmek, karakterleri tartışmak ve masaldan çıkarılan dersleri konuşmak etkileşimli bir deneyim yaratır. Uzmanlar, ebeveyn eşliğinde kullanılan eğitici uygulamaların dil gelişimini desteklediğini ve okul öncesi hazırlığa katkıda bulunduğunu belirtiyor. Ekran öncesi ve sonrası rutinler belirlemek, sağlıklı dijital alışkanlıkların temelini atar.', en:'The WHO recommends that children aged 2-5 should not exceed 1 hour of daily screen time. However, content quality matters as much as duration. Educational story apps replace passive video watching with active engagement. Choosing stories together with your child, discussing characters, and talking about lessons creates an interactive experience. Experts confirm that educational apps used with parental guidance support language development and preschool readiness. Establishing pre- and post-screen routines lays the foundation for healthy digital habits.', zh:'世卫组织建议2-5岁儿童每天屏幕时间不超过1小时。然而，内容质量与时长同样重要。教育故事应用通过主动参与取代被动观看视频。专家确认，在家长指导下使用的教育应用支持语言发展。', fr:'L\'OMS recommande moins d\'1 heure d\'écran par jour pour les 2-5 ans. La qualité du contenu compte autant que la durée. Les applications éducatives remplacent le visionnage passif par un engagement actif. Les experts confirment que les applications éducatives sous supervision parentale soutiennent le développement linguistique.', hi:'WHO 2-5 साल के बच्चों के लिए प्रतिदिन 1 घंटे से अधिक स्क्रीन टाइम की सिफारिश नहीं करता। हालांकि, सामग्री की गुणवत्ता भी उतनी ही महत्वपूर्ण है। शैक्षिक कहानी ऐप्स निष्क्रिय देखने की जगह सक्रिय भागीदारी प्रदान करते हैं।', ar:'توصي منظمة الصحة العالمية بألا يتجاوز وقت الشاشة ساعة واحدة يومياً للأطفال 2-5 سنوات. جودة المحتوى مهمة بقدر المدة. تطبيقات القصص التعليمية توفر مشاركة نشطة بدلاً من المشاهدة السلبية.', es:'La OMS recomienda no más de 1 hora diaria de pantalla para niños de 2-5 años. Sin embargo, la calidad del contenido importa tanto como la duración. Las apps educativas de cuentos reemplazan la visualización pasiva con participación activa. Los expertos confirman que las apps educativas con guía parental apoyan el desarrollo del lenguaje.' },
    blog6_content: { tr:'Nörobilim araştırmaları, 0-7 yaş aralığının dil öğrenimi için kritik dönem olduğunu ortaya koyuyor. Bu dönemde birden fazla dile maruz kalan çocukların beyinlerinde daha güçlü sinaptik bağlantılar oluşuyor. Masallar, yeni bir dili doğal bağlamda öğrenmenin en etkili yollarından biri. Tekrar eden cümle kalıpları, şarkılar ve ritimli anlatım, çocukların kelime hazinesini farkında bile olmadan genişletiyor. Aynı masalı farklı dillerde dinlemek, çocuğun diller arası bağlantılar kurmasını sağlıyor. İki dilli büyüyen çocukların bilişsel esneklik, çoklu görev yönetimi ve problem çözme becerilerinde akranlarına göre üstün oldukları bilimsel olarak kanıtlanmıştır.', en:'Neuroscience research reveals that ages 0-7 are a critical period for language learning. Children exposed to multiple languages during this period develop stronger synaptic connections. Stories are one of the most effective ways to learn a new language in a natural context. Repeating sentence patterns, songs, and rhythmic narration expand vocabulary without children even realizing it. Listening to the same story in different languages helps children build cross-linguistic connections. Bilingual children have been scientifically proven to excel in cognitive flexibility, multitasking, and problem-solving compared to their peers.', zh:'神经科学研究表明0-7岁是语言学习的关键期。在此期间接触多种语言的儿童会建立更强的突触连接。故事是在自然语境中学习新语言最有效的方式之一。重复的句型和节奏叙事在不知不觉中扩大了词汇量。双语儿童在认知灵活性方面优于同龄人。', fr:'Les recherches en neurosciences révèlent que 0-7 ans est une période critique pour l\'apprentissage des langues. Les contes sont l\'un des moyens les plus efficaces d\'apprendre une langue en contexte naturel. Les enfants bilingues excellent en flexibilité cognitive et en résolution de problèmes.', hi:'न्यूरोसाइंस शोध बताता है कि 0-7 वर्ष भाषा सीखने की महत्वपूर्ण अवधि है। कहानियां नई भाषा सीखने का सबसे प्रभावी तरीका है। द्विभाषी बच्चे संज्ञानात्मक लचीलेपन में बेहतर होते हैं।', ar:'تكشف أبحاث علم الأعصاب أن سن 0-7 هي فترة حرجة لتعلم اللغة. القصص من أكثر الطرق فعالية لتعلم لغة جديدة. الأطفال ثنائيو اللغة يتفوقون في المرونة المعرفية وحل المشكلات.', es:'La neurociencia revela que las edades de 0-7 años son un período crítico para el aprendizaje de idiomas. Los cuentos son una de las formas más efectivas de aprender un idioma en contexto natural. Los niños bilingües demuestran mayor flexibilidad cognitiva y habilidades de resolución de problemas.' },
    blog7_tag:     { tr:'Psikoloji', en:'Psychology', zh:'心理学', fr:'Psychologie', hi:'मनोविज्ञान', ar:'علم النفس', es:'Psicología' },
    blog7_title:   { tr:'Çocukların Korkularını Masallarla Yenmek', en:'Overcoming Children\'s Fears with Stories', zh:'用故事克服孩子的恐惧', fr:'Surmonter les peurs des enfants avec les contes', hi:'कहानियों से बच्चों के डर पर काबू', ar:'التغلب على مخاوف الأطفال بالقصص', es:'Superar los miedos infantiles con cuentos' },
    blog7_desc:    { tr:'Karanlık, canavar veya yalnızlık korkusuyla başa çıkmada masalların terapötik gücü.', en:'The therapeutic power of stories in dealing with fear of darkness, monsters, or loneliness.', zh:'故事在应对黑暗、怪物或孤独恐惧中的治疗力量。', fr:'Le pouvoir thérapeutique des contes face aux peurs de l\'obscurité ou de la solitude.', hi:'अंधेरे, राक्षस या अकेलेपन के डर से निपटने में कहानियों की चिकित्सीय शक्ति।', ar:'القوة العلاجية للقصص في التعامل مع خوف الظلام والوحوش والوحدة.', es:'El poder terapéutico de los cuentos para afrontar el miedo a la oscuridad o la soledad.' },
    blog7_content: { tr:'Çocukluk korkuları aslında gelişimlerinin normal bir parçasıdır. Masallar, bu korkuları semboller üzerinden anlatarak çocuğun güvenli bir ortamda kaygılarıyla yüzleşmesini sağlar. Kahramanın zorlukları aşması, çocuğa kendi iç dünyasındaki devlerle mücadele edebileceği güvenini verir. Faby ile kişiselleştirilmiş masallar oluşturarak bu süreci destekleyebilirsiniz.', en:'Childhood fears are actually a normal part of development. Stories help children confront their anxieties in a safe environment through symbolic language. A hero overcoming challenges gives children the confidence to face their own inner giants. You can support this process by creating personalized stories with Faby.', zh:'童年的恐惧其实是发展的正常部分。故事通过象征性语言帮助孩子在安全环境中面对焦虑。英雄克服困难给了孩子面对自己内心巨人的信心。您可以使用Faby创建个性化故事来支持这个过程。', fr:'Les peurs de l\'enfance font partie du développement normal. Les contes aident les enfants à affronter leurs angoisses dans un environnement sûr grâce au langage symbolique. Un héros surmontant des défis donne aux enfants la confiance d\'affronter leurs propres géants intérieurs. Créez des histoires personnalisées avec Faby pour soutenir ce processus.', hi:'बचपन के डर विकास का सामान्य हिस्सा हैं। कहानियां प्रतीकात्मक भाषा के माध्यम से बच्चों को सुरक्षित वातावरण में अपनी चिंताओं का सामना करने में मदद करती हैं। नायक की कठिनाइयों पर विजय बच्चे को अपने भीतर के दिग्गजों से लड़ने का आत्मविश्वास देती है।', ar:'مخاوف الطفولة هي جزء طبيعي من النمو. تساعد القصص الأطفال على مواجهة قلقهم في بيئة آمنة من خلال اللغة الرمزية. تجاوز البطل للتحديات يمنح الأطفال الثقة لمواجهة عمالقتهم الداخلية.', es:'Los miedos infantiles son una parte normal del desarrollo. Los cuentos ayudan a los niños a enfrentar sus ansiedades en un ambiente seguro mediante el lenguaje simbólico. Un héroe superando desafíos da a los niños confianza para enfrentar sus propios gigantes interiores.' },
    blog8_tag:     { tr:'Eğitim', en:'Education', zh:'教育', fr:'Éducation', hi:'शिक्षा', ar:'تعليم', es:'Educación' },
    blog8_title:   { tr:'Dil Becerilerini Geliştiren Hikaye Teknikleri', en:'Story Techniques That Develop Language Skills', zh:'发展语言能力的故事技巧', fr:'Techniques narratives pour développer les compétences linguistiques', hi:'भाषा कौशल विकसित करने वाली कहानी तकनीकें', ar:'تقنيات الحكاية لتطوير المهارات اللغوية', es:'Técnicas narrativas para desarrollar habilidades lingüísticas' },
    blog8_desc:    { tr:'Çocuğunuzun kelime dağarcığını zenginleştirmek için etkili hikaye anlatım teknikleri.', en:'Effective storytelling techniques to enrich your child\'s vocabulary.', zh:'丰富孩子词汇量的有效讲故事技巧。', fr:'Des techniques de narration efficaces pour enrichir le vocabulaire de votre enfant.', hi:'अपने बच्चे की शब्दावली समृद्ध करने के लिए प्रभावी कहानी कहने की तकनीकें।', ar:'تقنيات سرد القصص الفعالة لإثراء مفردات طفلك.', es:'Técnicas efectivas de narración para enriquecer el vocabulario de tu hijo.' },
    blog8_content: { tr:'Etkileşimli okuma, masal okuma sürecini bir diyaloğa dönüştürür. Okurken sorular sormak, duygu ve karakterleri seslendirmek kelimelerin anlam kazanmasını sağlar. Yeni kelimeleri hikaye bağlamında açıklamak, çocuğun kelime kapasitesini kalıcı olarak artırır. Araştırmalar, bu tekniklerin dil gelişimini tek yönlü okumaya göre %50 daha fazla desteklediğini gösteriyor.', en:'Interactive reading turns story time into a dialogue. Asking questions while reading, giving voice to emotions and characters helps words gain meaning. Explaining new words in story context permanently increases a child\'s vocabulary. Research shows these techniques support language development 50% more than one-way reading.', zh:'互动阅读将故事时间变成对话。边读边提问，给情感和角色发声，帮助词语获得意义。在故事背景中解释新词语永久增加孩子的词汇量。研究表明，这些技巧对语言发展的支持比单向阅读多50%。', fr:'La lecture interactive transforme l\'heure du conte en dialogue. Poser des questions, donner voix aux émotions et personnages aide les mots à prendre sens. Expliquer les nouveaux mots en contexte augmente durablement le vocabulaire. Les recherches montrent que ces techniques soutiennent le développement linguistique 50% plus qu\'une lecture unidirectionnelle.', hi:'इंटरएक्टिव पढ़ना कहानी के समय को संवाद में बदल देता है। पढ़ते समय प्रश्न पूछना, भावनाओं और पात्रों को आवाज देना शब्दों को अर्थ दिलाता है। कहानी संदर्भ में नए शब्दों को समझाना बच्चे की शब्दावली को स्थायी रूप से बढ़ाता है।', ar:'القراءة التفاعلية تحول وقت القصة إلى حوار. طرح الأسئلة أثناء القراءة وإضفاء الأصوات على المشاعر يساعد الكلمات على اكتساب المعنى. شرح الكلمات الجديدة في سياق القصة يزيد مفردات الطفل بشكل دائم.', es:'La lectura interactiva convierte el tiempo de cuentos en diálogo. Hacer preguntas mientras se lee, dar voz a emociones y personajes ayuda a las palabras a ganar significado. Explicar palabras nuevas en contexto aumenta permanentemente el vocabulario del niño.' },
    blog9_tag:     { tr:'Ebeveyn Rehberi', en:'Parent Guide', zh:'家长指南', fr:'Guide parental', hi:'अभिभावक गाइड', ar:'دليل الأهل', es:'Guía para padres' },
    blog9_title:   { tr:'Yatmadan Önce Okunacak En İyi 5 Masal Türü', en:'Top 5 Bedtime Story Types to Read', zh:'睡前5种最佳故事类型', fr:'5 types de contes à lire avant de dormir', hi:'सोने से पहले पढ़ने के शीर्ष 5 कहानी प्रकार', ar:'أفضل 5 أنواع قصص لقراءتها قبل النوم', es:'Los 5 mejores tipos de cuentos para leer antes de dormir' },
    blog9_desc:    { tr:'Huzurlu bir uyku ve kaliteli dinlenme için uzmanlar tarafından önerilen masal türleri.', en:'Story types recommended by experts for peaceful sleep and quality rest.', zh:'专家推荐的有助于平静睡眠和优质休息的故事类型。', fr:'Types de contes recommandés par les experts pour un sommeil paisible et un repos de qualité.', hi:'शांतिपूर्ण नींद के लिए विशेषज्ञों द्वारा अनुशंसित कहानी प्रकार।', ar:'أنواع القصص الموصى بها من الخبراء لنوم هادئ وراحة جيدة.', es:'Tipos de cuentos recomendados por expertos para un sueño tranquilo y descanso de calidad.' },
    blog9_content: { tr:'Her masal uyku öncesi için uygun değildir. Doğa betimlemeleri, tekerrürlü cümleler ve sakinleştirici yolculuk temaları çocuğun zihnini uykuya hazırlar. Arkadaşlık ve güven odaklı hikayeler çocuğun kaygılarını yatıştırır. Doğru masal seçimi ile uyku vakti, günün en huzurlu anına dönüşür. Faby\'nun uyku odaklı kütüphanesini keşfedin.', en:'Not every story is suitable for bedtime. Nature descriptions, repetitive sentences, and calming journey themes prepare a child\'s mind for sleep. Friendship and trust-focused stories soothe children\'s anxieties. With the right story choice, bedtime becomes the most peaceful moment of the day. Discover Faby\'s sleep-focused library.', zh:'不是每个故事都适合睡前。自然描写、重复句子和平静的旅程主题为孩子的睡眠做好准备。以友谊和信任为主题的故事能安抚孩子的焦虑。选择合适的故事，睡前时光将成为一天中最平静的时刻。探索Faby的睡眠专注图书馆。', fr:'Toutes les histoires ne conviennent pas à l\'heure du coucher. Les descriptions de la nature, les phrases répétitives et les thèmes de voyage apaisants préparent l\'esprit de l\'enfant au sommeil. Les histoires d\'amitié et de confiance apaisent les anxiétés. Avec le bon choix, l\'heure du coucher devient le moment le plus paisible. Découvrez la bibliothèque sommeil de Faby.', hi:'हर कहानी सोने के समय के लिए उपयुक्त नहीं है। प्रकृति वर्णन, दोहराव वाले वाक्य और शांत यात्रा विषय बच्चे के मन को नींद के लिए तैयार करते हैं। मित्रता और विश्वास पर केंद्रित कहानियां बच्चे की चिंताओं को शांत करती हैं।', ar:'ليست كل القصة مناسبة لوقت النوم. وصف الطبيعة والجمل التكرارية وموضوعات الرحلة الهادئة تهيئ عقل الطفل للنوم. القصص المتمحورة حول الصداقة والثقة تهدئ قلق الأطفال. مع اختيار القصة المناسبة، يصبح وقت النوم أهدأ لحظات اليوم.', es:'No todo cuento es apropiado para la hora de dormir. Descripciones de la naturaleza, frases repetitivas y temas de viaje tranquilizantes preparan la mente del niño para el sueño. Las historias de amistad y confianza calman las ansiedades. Con la elección correcta, la hora de dormir se convierte en el momento más tranquilo del día.' },
    feat_app_shots: { tr:'Uygulamadan Kareler', en:'App Screenshots', zh:'应用截图', fr:'Captures d\'écran', hi:'ऐप स्क्रीनशॉट', ar:'لقطات التطبيق', es:'Capturas de pantalla' },
    // -- Read time labels --
    read_min:      { tr:'dk okuma', en:'min read', zh:'分钟阅读', fr:'min de lecture', hi:'मिनट पढ़ें', ar:'دقائق قراءة', es:'min lectura' }
  }
};

/* ---------- Language Switching ---------- */
function setLanguage(lang) {
  if (!I18N.languages[lang]) return;
  I18N.currentLang = lang;
  localStorage.setItem('faby_lang', lang);

  // Set dir for RTL
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update all data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = I18N.translations[key];
    if (t && t[lang] !== undefined) el.textContent = t[lang];
  });

  // Update page title
  const path = window.location.pathname;
  let titleKey = 'page_title_home';
  if (path.includes('features')) titleKey = 'page_title_features';
  else if (path.includes('stories')) titleKey = 'page_title_stories';
  else if (path.includes('blog')) titleKey = 'page_title_blog';
  const pt = I18N.translations[titleKey];
  if (pt && pt[lang]) document.title = pt[lang];

  // Update book titles
  document.querySelectorAll('[data-book]').forEach(el => {
    const bookKey = el.getAttribute('data-book');
    const book = I18N.books[bookKey];
    if (book && book[lang]) el.textContent = book[lang];
  });

  // Update market screenshots
  const shots = I18N.screenshotMap[lang];
  if (shots) {
    document.querySelectorAll('[data-screenshot]').forEach((el, i) => {
      if (shots[i]) el.src = 'images/market_screenshots/' + shots[i];
    });
  }

  // Update hero screenshot too
  const heroImg = document.querySelector('.hero-phone-mockup img');
  if (heroImg && shots && shots[0]) {
    heroImg.src = 'images/market_screenshots/' + shots[0];
  }

  // Update social links per language
  const social = I18N.socialLinks[lang];
  if (social) {
    document.querySelectorAll('[data-social]').forEach(el => {
      const key = el.getAttribute('data-social');
      if (social[key]) el.href = social[key];
    });
  }

  // Update app store links (same for all languages)
  document.querySelectorAll('[data-store]').forEach(el => {
    const key = el.getAttribute('data-store');
    if (I18N.appLinks[key]) el.href = I18N.appLinks[key];
  });

  // Update active language in dropdown
  const currentFlag = document.getElementById('current-lang-flag');
  const currentName = document.getElementById('current-lang-name');
  if (currentFlag) currentFlag.textContent = I18N.languages[lang].flag;
  if (currentName) currentName.textContent = I18N.languages[lang].name;

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Show/hide multilingual content blocks (blog posts)
  document.querySelectorAll('[data-lang-content]').forEach(el => {
    el.style.display = el.getAttribute('data-lang-content') === lang ? '' : 'none';
  });

  // Metricool tracker per language
  const metricoolHashes = {
    ar: '322e87f3f03f4a864845561cbf94ac15',
    en: 'a6f9defd3627bf96720f6ae6303b3155',
    es: '1b06535149c1640202c9a0da456c1d03',
    fr: '754916bbc964587c3978fe46d9890fc3',
    hi: 'c36320f5f04b03f428c0475c57284f6e',
    tr: '11fdb18e2d3ed13fb9d0e12b14bd75ce',
    zh: '60468576a73577a57645db0b78a74fd'
  };
  const hash = metricoolHashes[lang];
  if (hash) {
    const existing = document.querySelector('script[data-metricool]');
    if (existing) existing.remove();
    const s = document.createElement('script');
    s.setAttribute('data-metricool', lang);
    s.textContent = 'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"' + hash + '"})});';
    document.head.appendChild(s);
  }
}

/* ---------- Detect Browser Language ---------- */
function detectBrowserLang() {
  const nav = navigator.languages ? navigator.languages[0] : navigator.language;
  if (!nav) return 'tr';
  const code = nav.toLowerCase().split('-')[0];
  const map = { tr:'tr', en:'en', zh:'zh', fr:'fr', hi:'hi', ar:'ar', es:'es',
                pt:'es', de:'en', it:'en', ja:'en', ko:'en', ru:'en' };
  return map[code] && I18N.languages[map[code]] ? map[code] : 'tr';
}

/* ---------- Init Language ---------- */
function initI18n() {
  const saved = localStorage.getItem('faby_lang');
  const lang = saved && I18N.languages[saved] ? saved : detectBrowserLang();
  setLanguage(lang);
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
