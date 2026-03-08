document.addEventListener('DOMContentLoaded', () => {

    // === LANGUAGE TRANSLATION LOGIC ===

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
            
            // Home Page (index.html)
            heroTitle: "Art, Skill, & Empowerment for a Brighter Future",
            heroDescription: "We are dedicated to preserving the ancient art of Mithila and empowering rural women with skills for a sustainable livelihood.",
            exploreCoursesBtn: "Explore Courses",
            announcement1: "Admission for Mithila Painting has started and will close on 7th Oct.",
            announcement2: "Admission for Cutting & Stitching closed on 15th Sep.",
            visionTitle: "Our Vision",
            vision1Title: "Preserve Tradition",
            vision1Desc: "Keeping the ancient art of Mithila painting alive for future generations through dedicated teaching and practice.",
            vision2Title: "Empower Women",
            vision2Desc: "Providing economic opportunities and skill development to women and girls in rural Bihar through art education.",
            vision3Title: "Build Community",
            vision3Desc: "Creating a supportive community where traditional arts flourish and women support each other's growth.",
            viewMoreBtn: "View More",
            galleryPreviewTitle: "A Glimpse of Our Work",
            viewFullGalleryBtn: "View Full Gallery",
            coursesPreviewTitle: "Our Courses",
            coursePreviewPaintingTitle: "Mithila Painting",
            coursePreviewPaintingDesc: "Learn the ancient art of Mithila with traditional techniques and natural colors.",
            coursePreviewPaintingMsg: "Admission Started",
            coursePreviewStitchingTitle: "Cutting & Stitching",
            coursePreviewStitchingDesc: "Master cutting and stitching to create beautiful garments and textiles.",
            coursePreviewStitchingMsg: "Admissions Closed",
            viewCourseDetailsBtn: "View Course Details",
            getInvolvedTitle: "Get Involved",
            getInvolvedSubtitle: "Join us in our mission to preserve traditional art and empower women. Your support can change lives.",
            involvedCard1Title: "Make a Donation",
            involvedCard1Desc: "Your donations help us provide free training, art supplies, and materials to women and girls in Madhubani, giving them a path to financial independence.",
            involvedCard2Title: "Volunteer",
            involvedCard2Desc: "We are always looking for passionate individuals to help with teaching, workshops, and digital marketing. Join our team and share your skills for a great cause.",
            involvedCard2Btn: "Become a Volunteer",
            involvedCard3Title: "Share our Story",
            involvedCard3Desc: "Help us reach more people by sharing our mission. Follow us on social media and spread the word about the incredible work our artists are doing.",

            // About Page (about.html)
            aboutTitle: "Our Story",
            storySubtitle: "Preserving Art, Empowering Lives",
            storyDesc1: "Mithila KritiKala Foundation was born from a simple idea: to use the power of traditional art to create a sustainable future for women in Madhubani, Bihar. We saw the incredible, centuries-old heritage of Mithila painting and the immense talent of local women, but also a lack of opportunity for them to turn their skills into a livelihood.",
            storyDesc2: "Our mission is two-fold: to preserve the beautiful and intricate art of Mithila for future generations, and to provide rural women with the skills and platform they need to become financially independent. We believe that by empowering a woman, we empower her entire family and community.",
            storyQuote: "\"Art is not just a creation, it's a language that connects generations and empowers the soul.\"",
            teamTitle: "Meet Our Team",

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

            // Gallery Page (gallery.html)
            galleryTitle: "Our Gallery",
            gallerySubtitle: "A collection of moments from our classes, workshops, and the beautiful art created by our talented students.",

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

            // Donate Page (donate.html)
            donateTitle: "Empower a Woman, Uplift a Community",
            donateSubtitle: "Your contribution directly provides training and materials to women in Madhubani.",
            bankTransferTitle: "For Direct Bank Transfer",
            onlineDonationTitle: "Donate to Mithila KritiKala",
            onlineDonationDesc: "Support our mission to preserve traditional art and empower women for a self-reliant future.",
            impactTitle: "Your Impact",
            impactCard1Title: "₹500 Donation",
            impactCard1Desc: "Provides art materials for one student for a month.",
            impactCard2Title: "₹2,500 Donation",
            impactCard2Desc: "Sponsors one student's complete course materials.",
            impactCard3Title: "₹10,000 Donation",
            impactCard3Desc: "Helps purchase new equipment and tools for the workshop."

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

            // Home Page (index.html)
            heroTitle: "कला, कौशल और सशक्तिकरण, एक उज्जवल भविष्य के लिए",
            heroDescription: "हम मिथिला की प्राचीन कला को संरक्षित करने और ग्रामीण महिलाओं को एक स्थायी आजीविका के लिए कौशल के साथ सशक्त बनाने के लिए समर्पित हैं।",
            exploreCoursesBtn: "कोर्स देखें",
            announcement1: "मिथिला पेंटिंग के लिए एडमिशन शुरू हो गया है और 7 अक्टूबर को बंद हो जाएगा।",
            announcement2: "कटिंग और सिलाई के लिए एडमिशन 15 सितंबर को बंद हो गया।",
            visionTitle: "हमारा दृष्टिकोण",
            vision1Title: "परंपरा का संरक्षण",
            vision1Desc: "समर्पित शिक्षण और अभ्यास के माध्यम से आने वाली पीढ़ियों के लिए मिथिला चित्रकला की प्राचीन कला को जीवित रखना।",
            vision2Title: "महिला सशक्तिकरण",
            vision2Desc: "कला शिक्षा के माध्यम से ग्रामीण बिहार में महिलाओं और लड़कियों को आर्थिक अवसर और कौशल विकास प्रदान करना।",
            vision3Title: "समुदाय का निर्माण",
            vision3Desc: "एक सहायक समुदाय बनाना जहां पारंपरिक कलाएं फलती-फूलती हैं और महिलाएं एक-दूसरे के विकास का समर्थन करती हैं।",
            viewMoreBtn: "और देखें",
            galleryPreviewTitle: "हमारे काम की एक झलक",
            viewFullGalleryBtn: "पूरी गैलरी देखें",
            coursesPreviewTitle: "हमारे कोर्स",
            coursePreviewPaintingTitle: "मिथिला पेंटिंग",
            coursePreviewPaintingDesc: "पारंपरिक तकनीकों और प्राकृतिक रंगों के साथ मिथिला की प्राचीन कला सीखें।",
            coursePreviewPaintingMsg: "एडमिशन शुरू",
            coursePreviewStitchingTitle: "कटिंग और सिलाई",
            coursePreviewStitchingDesc: "सुंदर वस्त्र और परिधान बनाने के लिए पारंपरिक कटिंग और सिलाई में महारत हासिल करें।",
            coursePreviewStitchingMsg: "एडमिशन बंद",
            viewCourseDetailsBtn: "कोर्स विवरण देखें",
            getInvolvedTitle: "शामिल हों",
            getInvolvedSubtitle: "पारंपरिक कला को संरक्षित करने और महिलाओं को सशक्त बनाने के हमारे मिशन में शामिल हों। आपका समर्थन जीवन बदल सकता है।",
            involvedCard1Title: "दान करें",
            involvedCard1Desc: "आपका दान हमें मधुबनी में महिलाओं और लड़कियों को मुफ्त प्रशिक्षण, कला सामग्री और उपकरण प्रदान करने में मदद करता है, जिससे उन्हें वित्तीय स्वतंत्रता का मार्ग मिलता है।",
            involvedCard2Title: "स्वयंसेवक बनें",
            involvedCard2Desc: "हम हमेशा शिक्षण, कार्यशालाओं और डिजिटल मार्केटिंग में मदद करने के लिए उत्साही व्यक्तियों की तलाश में रहते हैं। हमारी टीम में शामिल हों और एक महान उद्देश्य के लिए अपने कौशल साझा करें।",
            involvedCard2Btn: "स्वयंसेवक बनें",
            involvedCard3Title: "हमारी कहानी साझा करें",
            involvedCard3Desc: "हमारे मिशन को साझा करके अधिक लोगों तक पहुंचने में हमारी मदद करें। हमें सोशल मीडिया पर फॉलो करें और हमारे कलाकारों द्वारा किए जा रहे अविश्वसनीय काम के बारे में प्रचार करें।",

            // About Page (about.html)
            aboutTitle: "हमारी कहानी",
            storySubtitle: "कला का संरक्षण, जीवन का सशक्तिकरण",
            storyDesc1: "मिथिला कृतिकला फाउंडेशन का जन्म एक सरल विचार से हुआ: मधुबनी, बिहार में महिलाओं के लिए एक स्थायी भविष्य बनाने के लिए पारंपरिक कला की शक्ति का उपयोग करना। हमने मिथिला पेंटिंग की अविश्वसनीय, सदियों पुरानी विरासत और स्थानीय महिलाओं की immense प्रतिभा को देखा, लेकिन साथ ही उनके लिए अपने कौशल को आजीविका में बदलने के अवसर की कमी भी देखी।",
            storyDesc2: "हमारा मिशन दोहरा है: भविष्य की पीढ़ियों के लिए मिथिला की सुंदर और जटिल कला को संरक्षित करना, और ग्रामीण महिलाओं को उन कौशलों और मंच प्रदान करना जिनकी उन्हें आर्थिक रूप से स्वतंत्र बनने के लिए आवश्यकता है। हमारा मानना ​​है कि एक महिला को सशक्त बनाकर, हम उसके पूरे परिवार और समुदाय को सशक्त बनाते हैं।",
            storyQuote: "\"कला केवल एक रचना नहीं है, यह एक ऐसी भाषा है जो पीढ़ियों को जोड़ती है और आत्मा को सशक्त बनाती है।\"",
            teamTitle: "हमारी टीम से मिलें",

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

            // Gallery Page (gallery.html)
            galleryTitle: "हमारी गैलरी",
            gallerySubtitle: "हमारी कक्षाओं, कार्यशालाओं और हमारे प्रतिभाशाली छात्रों द्वारा बनाई गई सुंदर कला के क्षणों का एक संग्रह।",

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
            
            // Donate Page (donate.html)
            donateTitle: "एक महिला को सशक्त बनाएं, एक समुदाय को उठाएं",
            donateSubtitle: "आपका योगदान सीधे मधुबनी में महिलाओं को प्रशिक्षण और सामग्री प्रदान करता है।",
            bankTransferTitle: "डायरेक्ट बैंक ट्रांसफर के लिए",
            onlineDonationTitle: "मिथिला कृतिकला को दान करें",
            onlineDonationDesc: "पारंपरिक कला को संरक्षित करने और आत्मनिर्भर भविष्य के लिए महिलाओं को सशक्त बनाने के हमारे मिशन का समर्थन करें।",
            impactTitle: "आपका प्रभाव",
            impactCard1Title: "₹५०० का दान",
            impactCard1Desc: "एक छात्रा के लिए एक महीने की कला सामग्री प्रदान करता है।",
            impactCard2Title: "₹२,५०० का दान",
            impactCard2Desc: "एक छात्रा की पूरी कोर्स सामग्री को प्रायोजित करता है।",
            impactCard3Title: "₹१०,००० का दान",
            impactCard3Desc: "कार्यशाला के लिए नए उपकरण और औजार खरीदने में मदद करता है।"
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

        // Load saved language or default to English
        const savedLanguage = localStorage.getItem('language') || 'en';
        languageToggle.checked = savedLanguage === 'hi';
        setLanguage(savedLanguage);
    }
    
    // === Hamburger Menu for Mobile ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (event) => {
            navLinks.classList.toggle('active');
            event.stopPropagation(); // Prevents the document click listener from firing immediately
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
                navLinks.classList.remove('active');
            }
        });
    }

    // === Active Navigation Link Highlighting ===
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links a');

    navAnchors.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // === Scroll Animation Observer ===
    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // === Terms & Conditions Modal (Admission Page) ===
    const termsModal = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const termsCloseButton = termsModal ? termsModal.querySelector('.close-button') : null;

    if (termsLink && termsModal && termsCloseButton) {
        const openTermsModal = (e) => {
            e.preventDefault();
            termsModal.classList.add('visible');
        };
        const closeTermsModal = () => {
            termsModal.classList.remove('visible');
        };

        termsLink.addEventListener('click', openTermsModal);
        termsCloseButton.addEventListener('click', closeTermsModal);
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                closeTermsModal();
            }
        });
    }

    // === Gallery Modal (Gallery Page) ===
    const galleryImages = document.querySelectorAll('.gallery-image-wrapper');
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const galleryCloseBtn = document.getElementById('modal-close-btn');

    if (galleryModal && galleryImages.length > 0) {
        galleryImages.forEach(imageWrapper => {
            imageWrapper.addEventListener('click', () => {
                const imgSrc = imageWrapper.querySelector('img').src;
                modalImage.src = imgSrc;
                galleryModal.classList.add('visible');
            });
        });

        const closeGalleryModal = () => {
            galleryModal.classList.remove('visible');
        };

        if(galleryCloseBtn) {
            galleryCloseBtn.addEventListener('click', closeGalleryModal);
        }
        
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                closeGalleryModal();
            }
        });
    }
});

// === Preloader Hiding Logic ===
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // Wait for fade out transition
    }
});
