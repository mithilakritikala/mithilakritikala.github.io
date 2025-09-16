document.addEventListener('DOMContentLoaded', () => {

    // === LANGUAGE TRANSLATION CODE START ===

    const translations = {
        en: {
            // Navbar & Footer (Common)
            logoText: "Mithila KritiKala",
            navHome: "Home",
            navAbout: "About Us",
            navCourses: "Courses",
            navGallery: "Gallery",
            navAdmission: "Admission",
            navContact: "Contact",
            navJoin: "Join Us",
            navDonate: "Donate",
            navDonateMobile: "Donate",
            footerTitle: "Mithila KritiKala",
            footerDesc: "Dedicated to preserving the beautiful art traditions of Mithila while empowering women and girls in Madhubani, Bihar through traditional art education and skill development.",
            quickLinksTitle: "Quick Links",
            contactInfoTitle: "Contact Info",
            footerHome: "Home",
            footerAbout: "About Us",
            footerCourses: "Courses",
            footerGallery: "Gallery",
            footerContact: "Contact",
            footerJoin: "Join Us",
            footerDonate: "Donate",
            footerAddress: "Kataiya Road Benipatti, Madhubani, BIhar",
            footerRights: "© 2025 Mithila KritiKala Foundation. All rights reserved.",

            // Home Page (index.html)
            heroTitle: "Art, Skill, & Empowerment for a Brighter Future",
            heroDescription: "We are dedicated to preserving the ancient art of Mithila and empowering rural women with skills for a sustainable livelihood.",
            exploreCoursesBtn: "Explore Courses",
            visionTitle: "Our Vision",
            vision1Title: "Preserve Tradition",
            vision1Desc: "Keeping the ancient art of Mithila painting alive for future generations through dedicated teaching and practice.",
            vision2Title: "Empower Women",
            vision2Desc: "Providing economic opportunities and skill development to women and girls in rural Bihar through art education.",
            vision3Title: "Build Community",
            vision3Desc: "Creating a supportive community where traditional arts flourish and women support each other's growth.",
            announcement1: "Admission for Mithila Painting has started and will close on 7th Oct.",
            announcement2: "Admission for Cutting & Stitching closed on 15th Sep.",
            viewMoreBtn: "View More",
            coursesPreviewTitle: "Our Courses",
            coursePreviewPaintingTitle: "Mithila Painting",
            coursePreviewPaintingDesc: "Learn the ancient art of Mithila with traditional techniques and natural colors.",
            coursePreviewPaintingMsg: "Admission Started",
            coursePreviewStitchingTitle: "Cutting & Stitching",
            coursePreviewStitchingDesc: "Master cutting and stitching to create beautiful garments and textiles.",
            coursePreviewStitchingMsg: "Admissions Closed",
            viewCourseDetailsBtn: "View Course Details",
            galleryPreviewTitle: "A Glimpse of Our Work",
            viewFullGalleryBtn: "View Full Gallery",

            // Gallery Page (gallery.html)
            galleryTitle: "Our Gallery",
            gallerySubtitle: "A collection of moments from our classes, workshops, and the beautiful art created by our talented students.",

            // About Page (about.html)
            aboutTitle: "About Us",
            aboutSubtitle: "Dedicated to preserving and promoting the beautiful art traditions of Mithila while empowering women in our community.",
            missionTitle: "Our Mission",
            missionDesc1: "Mithila KritiKala Foundation is committed to preserving the ancient art traditions of Mithila while providing sustainable livelihood opportunities for women and girls in Madhubani, Bihar.",
            missionDesc2: "We believe that traditional arts are not just cultural treasures but also powerful tools for economic empowerment and community development.",
            missionPoint1: "Preserve traditional Mithila art techniques",
            missionPoint2: "Empower women through skill development",
            missionPoint3: "Create sustainable income opportunities",
            missionPoint4: "Build strong community networks",
            founderTitle: "Our Founder",
            founderRole: "Founder & Managing Trustee",
            founderDesc: "With a deep passion for Mithila's cultural heritage and a vision for women's empowerment, Vishal Kumar Thakur founded this organization to create a platform for sustainable change and artistic preservation.",
            trusteesTitle: "Our Trustees",
            trustee1Role: "Trustee",
            trustee2Role: "Trustee & Training Head",

            // Courses Page (courses.html)
            coursesTitle: "Our Courses",
            coursesSubtitle: "Learn traditional arts that have been passed down through generations. Our comprehensive courses are designed for all skill levels.",
            course1Title: "Mithila Painting",
            course1Desc: "Learn the ancient art of Mithila painting with traditional techniques, natural colors, and authentic motifs passed down through generations.",
            courseDetailsTitle: "Course Details",
            courseLearnTitle: "What You'll Learn",
            course1Duration: "Duration: 3 months",
            course1Classes: "Classes: Mon to Friday",
            course1Cert: "Certificate Provided",
            course1Learn1: "Traditional motifs & patterns",
            course1Learn3: "Canvas and wall painting",
            instructorLabel: "Instructor:",
            courseFeeFree: "Free",
            course2Title: "Cutting & Stitching",
            course2Desc: "Master traditional cutting and stitching techniques to create beautiful details for clothing and home textiles.",
            course2Duration: "Duration: 3 months",
            course2Classes: "Classes: Mon to Friday",
            course2Cert: "Certificate Provided",
            course2Learn1: "Basic and advanced stitches",
            course2Learn2: "Garment construction",
            course2Learn3: "Quality finishing techniques",
            applyNowBtn: "Apply Now",
            admissionClosed: "Admission Closed",
            benefitsTitle: "Course Benefits & Support",
            benefitCertTitle: "Certification Provided",
            benefitCertDesc: "Receive an official certificate upon successful completion of the course, recognizing your new skills.",
            benefit2Title: "Post-Course Support",
            benefit2Desc: "Marketing assistance and order connections to help sell your artwork and creations.",
            benefit3Title: "Flexible Learning",
            benefit3Desc: "Morning and evening batches available to accommodate different schedules.",

            // Admission Page (admission.html)
            admissionTitle: "Admission Form",
            admissionSubtitle: "Join our community of artists and start your journey in traditional Mithila arts.",
            formFullName: "Full Name *",
            formFathersName: "Father's Name *",
            formMothersName: "Mother's Name *",
            formAadhaar: "Aadhaar Card No. *",
            formAge: "Age *",
            formGender: "Gender *",
            formMale: "Male",
            formFemale: "Female",
            formOther: "Other",
            formPhone: "Phone Number *",
            formCourse: "Interested Course *",
            formSelectCourse: "Select a course",
            formCourseMithila: "Mithila Painting",
            formCourseSewing: "Cutting & Stitching",
            formAddress: "Full Address *",
            formDistrict: "District *",
            formState: "State *",
            formExperience: "Previous Experience (Optional)",
            formTerms: "I agree to the terms and conditions and confirm that all information provided is accurate. *",
            formSubmitBtn: "Submit Application",
            admissionProcessTitle: "Admission Process",
            admissionProcess1: "Apply online by filling out the form or visit our office.",
            admissionProcess2: "A photocopy of Aadhaar card and one passport-size photo are mandatory.",
            admissionProcess3: "Seats are limited and are offered on a first-come, first-served basis.",
            admissionProcess4: "Start your artistic journey!",
            admissionBatchTitle: "Batch Information",
            admissionBatchCurrent: "Upcoming Batch",
            admissionBatchUpcoming: "Current Batch",
            batch1Details: "Mithila Painting (Starts on 1st Oct 2025)",
            batch2Details: "Cutting & Stitching (Started on 1st Sep 2025)",
            modalTermsTitle: "Terms and Conditions",
            modalTerm1Title: "1. Eligibility",
            modalTerm1Desc: "All courses are open to women and girls from our target communities. There is no minimum educational qualification required.",
            modalTerm2Title: "2. Course Fee",
            modalTerm2Desc: "All our training programs are provided completely free of cost. However, a small, refundable security deposit may be required to ensure commitment.",
            modalTerm3Title: "3. Attendance",
            modalTerm3Desc: "A minimum of 80% attendance is required to be eligible for the course completion certificate.",
            modalTerm4Title: "4. Materials",
            modalTerm4Desc: "All necessary art supplies and materials will be provided by Mithila KritiKala Foundation.",
            modalTerm5Title: "5. Code of Conduct",
            modalTerm5Desc: "Students are expected to maintain a respectful and collaborative environment. Any form of indiscipline may result in discontinuation from the course.",
            modalTerm6Title: "6. Certification",
            modalTerm6Desc: "A certificate of completion will be awarded upon successful completion of the course, including any final projects or assessments.",

            // Contact Page (contact.html)
            contactTitle: "Contact Us",
            contactSubtitle: "Get in touch with us to learn more about our courses or to support our mission.",
            contactGetInTouch: "Get In Touch",
            contactAddressLabel: "Address:",
            contactPhoneLabel: "Phone:",
            contactEmailLabel: "Email:",
            contactHoursLabel: "Office Hours:",
            contactHoursDay: "Monday - Saturday: 9:00 AM - 6:00 PM",
            contactHoursSunday: "Sunday: Closed",
            contactFormTitle: "Send us a Message",
            formName: "Name *",
            formEmail: "Email *",
            formSubject: "Subject *",
            formMessage: "Message *",
            formSendBtn: "Send Message",
            contactFindUs: "Find Us",

            // Join Us Page (join.html)
            joinTitle: "Join Our Mission",
            joinSubtitle: "Become a volunteer and help us preserve traditional arts while empowering women in our community. Together, we can make a lasting impact.",
            joinWhyVolunteer: "Why Volunteer With Us?",
            joinBenefit1Title: "Make a Difference",
            joinBenefit1Desc: "Help preserve Mithila art while empowering women and girls to become economically independent through skill development.",
            joinBenefit2Title: "Build Community",
            joinBenefit2Desc: "Join a passionate community of volunteers working together to create positive change in rural Bihar through art education.",
            joinBenefit3Title: "Learn & Grow",
            joinBenefit3Desc: "Gain valuable experience in community development, art education, and cultural preservation while making lifelong connections.",
            joinOpportunities: "Volunteer Opportunities",
            joinOpp1: "Art instruction and mentoring",
            joinOpp2: "Workshop organization and coordination",
            joinOpp3: "Digital marketing and social media",
            joinOpp4: "Fundraising and grant writing",
            joinApplication: "Volunteer Application",
            formCity: "City *",
            formSkills: "Skills & Interests *",

        },
        hi: {
            // Navbar & Footer (Common)
            logoText: "मिथिला कृतिकला",
            navHome: "होम",
            navAbout: "हमारे बारे में",
            navCourses: "कोर्स",
            navGallery: "गैलरी",
            navAdmission: "एडमिशन",
            navContact: "संपर्क",
            navJoin: "हमसे जुड़ें",
            navDonate: "दान करें",
            navDonateMobile: "दान करें",
            footerTitle: "मिथिला कृतिकला",
            footerDesc: "पारंपरिक कला शिक्षा और कौशल विकास के माध्यम से मधुबनी, बिहार में महिलाओं और लड़कियों को सशक्त बनाते हुए मिथिला की सुंदर कला परंपराओं को संरक्षित करने के लिए समर्पित।",
            quickLinksTitle: "क्विक लिंक्स",
            contactInfoTitle: "संपर्क जानकारी",
            footerHome: "होम",
            footerAbout: "हमारे बारे में",
            footerCourses: "कोर्स",
            footerGallery: "गैलरी",
            footerContact: "संपर्क",
            footerJoin: "हमसे जुड़ें",
            footerDonate: "दान करें",
            footerAddress: "कटैया रोड बेनीपट्टी, मधुबनी, बिहार",
            footerRights: "© 2025 मिथिला कृतिकला फाउंडेशन। सर्वाधिकार सुरक्षित।",

            // Home Page (index.html)
            heroTitle: "कला, कौशल और सशक्तिकरण, एक उज्जवल भविष्य के लिए",
            heroDescription: "हम मिथिला की प्राचीन कला को संरक्षित करने और ग्रामीण महिलाओं को एक स्थायी आजीविका के लिए कौशल के साथ सशक्त बनाने के लिए समर्पित हैं।",
            exploreCoursesBtn: "कोर्स देखें",
            visionTitle: "हमारा दृष्टिकोण",
            vision1Title: "परंपरा का संरक्षण",
            vision1Desc: "समर्पित शिक्षण और अभ्यास के माध्यम से आने वाली पीढ़ियों के लिए मिथिला चित्रकला की प्राचीन कला को जीवित रखना।",
            vision2Title: "महिला सशक्तिकरण",
            vision2Desc: "कला शिक्षा के माध्यम से ग्रामीण बिहार में महिलाओं और लड़कियों को आर्थिक अवसर और कौशल विकास प्रदान करना।",
            vision3Title: "समुदाय का निर्माण",
            vision3Desc: "एक सहायक समुदाय बनाना जहां पारंपरिक कलाएं फलती-फूलती हैं और महिलाएं एक-दूसरे के विकास का समर्थन करती हैं।",
            announcement1: "मिथिला पेंटिंग के लिए एडमिशन शुरू हो गया है और 7 अक्टूबर को बंद हो जाएगा।",
            announcement2: "कटिंग और सिलाई के लिए एडमिशन 15 सितंबर को बंद हो गया।",
            viewMoreBtn: "और देखें",
            coursesPreviewTitle: "हमारे कोर्स",
            coursePreviewPaintingTitle: "मिथिला पेंटिंग",
            coursePreviewPaintingDesc: "पारंपरिक तकनीकों और प्राकृतिक रंगों के साथ मिथिला की प्राचीन कला सीखें।",
            coursePreviewPaintingMsg: "एडमिशन शुरू",
            coursePreviewStitchingTitle: "कटिंग और सिलाई",
            coursePreviewStitchingDesc: "सुंदर वस्त्र और परिधान बनाने के लिए पारंपरिक कटिंग और सिलाई में महारत हासिल करें।",
            coursePreviewStitchingMsg: "एडमिशन बंद",
            viewCourseDetailsBtn: "कोर्स विवरण देखें",
            galleryPreviewTitle: "हमारे काम की एक झलक",
            viewFullGalleryBtn: "पूरी गैलरी देखें",

            // Gallery Page (gallery.html)
            galleryTitle: "हमारी गैलरी",
            gallerySubtitle: "हमारी कक्षाओं, कार्यशालाओं और हमारे प्रतिभाशाली छात्रों द्वारा बनाई गई सुंदर कला के क्षणों का एक संग्रह।",

            // About Page (about.html)
            aboutTitle: "हमारे बारे में",
            aboutSubtitle: "हमारे समुदाय में महिलाओं को सशक्त बनाते हुए मिथिला की सुंदर कला परंपराओं को संरक्षित और बढ़ावा देने के लिए समर्पित।",
            missionTitle: "हमारा मिशन",
            missionDesc1: "मिथिला कृतिकला फाउंडेशन मधुबनी, बिहार में महिलाओं और लड़कियों के लिए स्थायी आजीविका के अवसर प्रदान करते हुए मिथिला की प्राचीन कला परंपराओं को संरक्षित करने के लिए प्रतिबद्ध है।",
            missionDesc2: "हमारा मानना ​​है कि पारंपरिक कलाएं न केवल सांस्कृतिक खजाने हैं, बल्कि आर्थिक सशक्तिकरण और सामुदायिक विकास के लिए शक्तिशाली उपकरण भी हैं।",
            missionPoint1: "पारंपरिक मिथिला कला तकनीकों का संरक्षण",
            missionPoint2: "कौशल विकास के माध्यम से महिलाओं का सशक्तिकरण",
            missionPoint3: "स्थायी आय के अवसरों का निर्माण",
            missionPoint4: "मजबूत सामुदायिक नेटवर्क बनाना",
            founderTitle: "हमारे संस्थापक",
            founderRole: "संस्थापक और प्रबंध ट्रस्टी",
            founderDesc: "मिथिला की सांस्कृतिक विरासत के प्रति गहरे जुनून और महिला सशक्तिकरण के दृष्टिकोण के साथ, विशाल कुमार ठाकुर ने स्थायी परिवर्तन और कलात्मक संरक्षण के लिए एक मंच बनाने के लिए इस संगठन की स्थापना की।",
            trusteesTitle: "हमारे ट्रस्टी",
            trustee1Role: "ट्रस्टी",
            trustee2Role: "ट्रस्टी और प्रशिक्षण प्रमुख",

            // Courses Page (courses.html)
            coursesTitle: "हमारे कोर्स",
            coursesSubtitle: "पीढ़ियों से चली आ रही पारंपरिक कलाएं सीखें। हमारे व्यापक पाठ्यक्रम सभी कौशल स्तरों के लिए डिज़ाइन किए गए हैं।",
            course1Title: "मिथिला पेंटिंग",
            course1Desc: "पीढ़ियों से चली आ रही पारंपरिक तकनीकों, प्राकृतिक रंगों और प्रामाणिक रूपांकनों के साथ मिथिला पेंटिंग की प्राचीन कला सीखें।",
            courseDetailsTitle: "कोर्स विवरण",
            courseLearnTitle: "आप क्या सीखेंगे",
            course1Duration: "अवधि: 3 महीने",
            course1Classes: "कक्षाएं: सोम से शुक्र",
            course1Cert: "प्रमाणपत्र प्रदान किया गया",
            course1Learn1: "पारंपरिक रूपांकन और पैटर्न",
            course1Learn3: "कैनवास और दीवार पेंटिंग",
            instructorLabel: "प्रशिक्षक:",
            courseFeeFree: "निःशुल्क",
            course2Title: "कटिंग और सिलाई",
            course2Desc: "कपड़ों और घरेलू वस्त्रों के लिए सुंदर विवरण बनाने के लिए पारंपरिक कटिंग और सिलाई तकनीकों में महारत हासिल करें।",
            course2Duration: "अवधि: 3 महीने",
            course2Classes: "कक्षाएं: सोम से शुक्र",
            course2Cert: "प्रमाणपत्र प्रदान किया गया",
            course2Learn1: "बुनियादी और उन्नत टांके",
            course2Learn2: "परिधान निर्माण",
            course2Learn3: "गुणवत्तापूर्ण फिनिशिंग तकनीक",
            applyNowBtn: "अभी आवेदन करें",
            admissionClosed: "एडमिशन बंद",
            benefitsTitle: "कोर्स के लाभ और सहायता",
            benefitCertTitle: "प्रमाणपत्र प्रदान किया जाएगा",
            benefitCertDesc: "पाठ्यक्रम के सफल समापन पर एक आधिकारिक प्रमाण पत्र प्राप्त करें, जो आपके नए कौशल को मान्यता देगा।",
            benefit2Title: "कोर्स के बाद सहायता",
            benefit2Desc: "आपकी कलाकृति और कृतियों को बेचने में मदद के लिए विपणन सहायता और ऑर्डर कनेक्शन।",
            benefit3Title: "लचीली शिक्षा",
            benefit3Desc: "विभिन्न कार्यक्रमों को समायोजित करने के लिए सुबह और शाम के बैच उपलब्ध हैं।",

            // Admission Page (admission.html)
            admissionTitle: "एडमिशन फॉर्म",
            admissionSubtitle: "हमारे कलाकारों के समुदाय में शामिल हों और पारंपरिक मिथिला कला में अपनी यात्रा शुरू करें।",
            formFullName: "पूरा नाम *",
            formFathersName: "पिता का नाम *",
            formMothersName: "माता का नाम *",
            formAadhaar: "आधार कार्ड नंबर *",
            formAge: "आयु *",
            formGender: "लिंग *",
            formMale: "पुरुष",
            formFemale: "महिला",
            formOther: "अन्य",
            formPhone: "फ़ोन नंबर *",
            formCourse: "इच्छुक कोर्स *",
            formSelectCourse: "एक कोर्स चुनें",
            formCourseMithila: "मिथिला पेंटिंग",
            formCourseSewing: "कटिंग और सिलाई",
            formAddress: "पूरा पता *",
            formDistrict: "जिला *",
            formState: "राज्य *",
            formExperience: "पिछला अनुभव (वैकल्पिक)",
            formTerms: "मैं नियमों और शर्तों से सहमत हूं और पुष्टि करता हूं कि प्रदान की गई सभी जानकारी सटीक है। *",
            formSubmitBtn: "आवेदन जमा करें",
            admissionProcessTitle: "एडमिशन प्रक्रिया",
            admissionProcess1: "फॉर्म भरकर ऑनलाइन आवेदन करें या हमारे कार्यालय में आएं।",
            admissionProcess2: "आधार कार्ड की फोटोकॉपी और एक पासपोर्ट साइज फोटो अनिवार्य है।",
            admissionProcess3: "सीटें सीमित हैं और पहले आओ, पहले पाओ के आधार पर दी जाती हैं।",
            admissionProcess4: "अपनी कलात्मक यात्रा शुरू करें!",
            admissionBatchTitle: "बैच की जानकारी",
            admissionBatchCurrent: "आगामी बैच",
            admissionBatchUpcoming: "वर्तमान बैच",
            batch1Details: "मिथिला पेंटिंग (1 अक्टूबर 2025 से शुरू)",
            batch2Details: "कटिंग और सिलाई (1 सितंबर 2025 से शुरू)",
            modalTermsTitle: "नियम एवं शर्तें",
            modalTerm1Title: "1. पात्रता",
            modalTerm1Desc: "सभी पाठ्यक्रम हमारे लक्षित समुदायों की महिलाओं और लड़कियों के लिए खुले हैं। कोई न्यूनतम शैक्षणिक योग्यता की आवश्यकता नहीं है।",
            modalTerm2Title: "2. कोर्स शुल्क",
            modalTerm2Desc: "हमारे सभी प्रशिक्षण कार्यक्रम पूरी तरह से नि:शुल्क प्रदान किए जाते हैं। हालांकि, प्रतिबद्धता सुनिश्चित करने के लिए एक छोटी, वापसी योग्य सुरक्षा जमा की आवश्यकता हो सकती है।",
            modalTerm3Title: "3. उपस्थिति",
            modalTerm3Desc: "कोर्स पूरा होने के प्रमाण पत्र के लिए पात्र होने के लिए न्यूनतम 80% उपस्थिति आवश्यक है।",
            modalTerm4Title: "4. सामग्री",
            modalTerm4Desc: "सभी आवश्यक कला सामग्री और उपकरण मिथिला कृतिकला फाउंडेशन द्वारा प्रदान किए जाएंगे।",
            modalTerm5Title: "5. आचार संहिता",
            modalTerm5Desc: "छात्रों से एक सम्मानजनक और सहयोगात्मक वातावरण बनाए रखने की अपेक्षा की जाती है। किसी भी प्रकार की अनुशासनहीनता के परिणामस्वरूप पाठ्यक्रम से निलंबन हो सकता है।",
            modalTerm6Title: "6. प्रमाणीकरण",
            modalTerm6Desc: "पाठ्यक्रम के सफल समापन पर, किसी भी अंतिम परियोजनाओं या मूल्यांकन सहित, एक पूर्णता प्रमाण पत्र प्रदान किया जाएगा।",

            // Contact Page (contact.html)
            contactTitle: "हमसे संपर्क करें",
            contactSubtitle: "हमारे पाठ्यक्रमों के बारे में अधिक जानने या हमारे मिशन का समर्थन करने के लिए हमसे संपर्क करें।",
            contactGetInTouch: "संपर्क में रहें",
            contactAddressLabel: "पता:",
            contactPhoneLabel: "फ़ोन:",
            contactEmailLabel: "ईमेल:",
            contactHoursLabel: "कार्यालय समय:",
            contactHoursDay: "सोमवार - शनिवार: सुबह 9:00 - शाम 6:00",
            contactHoursSunday: "रविवार: बंद",
            contactFormTitle: "हमें एक संदेश भेजें",
            formName: "नाम *",
            formEmail: "ईमेल *",
            formSubject: "विषय *",
            formMessage: "संदेश *",
            formSendBtn: "संदेश भेजें",
            contactFindUs: "हमें खोजें",

            // Join Us Page (join.html)
            joinTitle: "हमारे मिशन में शामिल हों",
            joinSubtitle: "एक स्वयंसेवक बनें और हमारे समुदाय में महिलाओं को सशक्त बनाते हुए पारंपरिक कलाओं को संरक्षित करने में हमारी मदद करें। साथ मिलकर, हम एक स्थायी प्रभाव डाल सकते हैं।",
            joinWhyVolunteer: "हमारे साथ स्वयंसेवा क्यों करें?",
            joinBenefit1Title: "एक अंतर बनाओ",
            joinBenefit1Desc: "कौशल विकास के माध्यम से महिलाओं और लड़कियों को आर्थिक रूप से स्वतंत्र बनने के लिए सशक्त बनाते हुए मिथिला कला को संरक्षित करने में मदद करें।",
            joinBenefit2Title: "समुदाय बनाएँ",
            joinBenefit2Desc: "कला शिक्षा के माध्यम से ग्रामीण बिहार में सकारात्मक बदलाव लाने के लिए मिलकर काम करने वाले स्वयंसेवकों के एक भावुक समुदाय में शामिल हों।",
            joinBenefit3Title: "जानें और बढ़ें",
            joinBenefit3Desc: "जीवन भर के कनेक्शन बनाते हुए सामुदायिक विकास, कला शिक्षा और सांस्कृतिक संरक्षण में बहुमूल्य अनुभव प्राप्त करें।",
            joinOpportunities: "स्वयंसेवी अवसर",
            joinOpp1: "कला निर्देश और सलाह",
            joinOpp2: "कार्यशाला संगठन और समन्वय",
            joinOpp3: "डिजिटल मार्केटिंग और सोशल मीडिया",
            joinOpp4: "धन उगाही और अनुदान लेखन",
            joinApplication: "स्वयंसेवी आवेदन",
            formCity: "शहर *",
            formSkills: "कौशल और रुचियां *",

        }
    };

    const languageToggle = document.getElementById('language-toggle');
    const setLanguage = (language) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                element.innerText = translations[language][key];
            }
        });
        document.documentElement.lang = language;
    };

    if (languageToggle) {
        languageToggle.addEventListener('change', () => {
            const language = languageToggle.checked ? 'hi' : 'en';
            localStorage.setItem('language', language);
            setLanguage(language);
        });
    }

    const savedLanguage = localStorage.getItem('language') || 'en';
    if (languageToggle) {
        languageToggle.checked = savedLanguage === 'hi';
    }

    // setLanguage(savedLanguage);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (event) => {
            navLinks.classList.toggle('active');
            event.stopPropagation();
        });
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
                navLinks.classList.remove('active');
            }
        });
    }

    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links a');

    navAnchors.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const sections = document.querySelectorAll('.fade-in-section, .vision-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const modalOverlay = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const closeButton = document.querySelector('.close-button');

    if (termsLink && modalOverlay && closeButton) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('visible');
        });
        closeButton.addEventListener('click', () => {
            modalOverlay.classList.remove('visible');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('visible');
            }
        });
    }
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
