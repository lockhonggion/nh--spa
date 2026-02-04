import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.services': 'Dịch vụ',
    'nav.reviews': 'Đánh giá',
    'nav.contact': 'Liên hệ',
    'nav.book': 'Đặt lịch',
    'nav.call_book': 'Gọi đặt lịch:',
    'nav.no_tip': 'Không nhận TIP',
    'nav.support': 'Hỗ trợ khách hàng',

    'hero.badge': 'Trị liệu chuyên nghiệp • Không nhận tiền TIP',
    'hero.title_1': 'Chữa lành',
    'hero.title_2': 'Thân & Tâm',
    'hero.desc': 'Trải nghiệm <strong>massage trị liệu</strong> và <strong>ấn huyệt</strong> đích thực trong không gian yên tĩnh. <strong>Giá cả minh bạch</strong>, kỹ thuật viên <strong>tay nghề cao</strong>, thư giãn tuyệt đối.',
    'hero.btn_book': 'Đặt lịch ngay',
    'hero.btn_services': 'Xem dịch vụ',
    'hero.rating': '4.9/5.0 đánh giá trên Google',

    'about.title': 'Về Nhẹ Spa',
    'about.subtitle': 'Hơn cả massage. Chúng tôi trao gửi sự quan tâm.',
    'about.p1': 'Tại Nhẹ Spa Tân Phú, chúng tôi tin rằng sự chữa lành thực sự đến từ đôi tay lành nghề và trái tim bình an. Khác với các spa thông thường, chúng tôi chú trọng vào <strong>hiệu quả trị liệu</strong>. Kỹ thuật viên được đào tạo chuyên sâu về ấn huyệt và massage mô sâu để giải quyết các cơn đau mỏi cổ, vai, gáy và lưng.',
    'about.p2': 'Chúng tôi tự hào là một trong số ít spa áp dụng chính sách <strong>"Không nhận TIP"</strong>. Giá bạn thấy là giá bạn trả. Điều này đảm bảo bạn có thể hoàn toàn thư giãn mà không lo lắng về chi phí phát sinh.',
    'about.badge': '"Trị liệu thật, không chỉ là thư giãn."',
    'about.f1_title': 'Tận tâm từ trái tim',
    'about.f1_desc': 'Mỗi liệu trình được điều chỉnh phù hợp với cơ thể bạn.',
    'about.f2_title': 'Minh bạch & Trung thực',
    'about.f2_desc': 'Không phí ẩn. Không nhận tip. Chỉ có dịch vụ tận tâm.',
    'about.f3_title': 'Không gian tĩnh lặng',
    'about.f3_desc': 'Yên tĩnh, sạch sẽ và thoang thoảng hương thảo mộc.',

    'services.title': 'Liệu trình của chúng tôi',
    'services.subtitle': 'Các liệu pháp chuyên sâu giúp giảm đau và phục hồi cân bằng.',
    'services.not_sure': 'Bạn chưa biết liệu trình nào phù hợp?',
    'services.call': 'Gọi để được tư vấn miễn phí',

    'why.title': 'Tại sao chọn Nhẹ Spa?',
    'why.subtitle': 'Chúng tôi tập trung vào điều quan trọng nhất: sức khỏe của bạn.',

    'reviews.title': 'Khách hàng nói về chúng tôi',
    'reviews.subtitle': 'Được đánh giá {rating}/5.0 bởi cộng đồng.',

    'booking.title': 'Đặt lịch thư giãn',
    'booking.subtitle': 'Sẵn sàng để cảm thấy nhẹ nhõm hơn? Đặt hẹn ngay hôm nay.',
    'booking.contact_info': 'Thông tin liên hệ',
    'booking.address': 'Địa chỉ',
    'booking.phone': 'Điện thoại',
    'booking.hours': 'Giờ mở cửa',
    'booking.hours_desc': 'Mở cửa hàng ngày từ 09:30',
    'booking.last_booking': 'Nhận khách cuối lúc 20:30',
    'booking.req_title': 'Yêu cầu đặt hẹn',
    'booking.success_title': 'Đã gửi yêu cầu!',
    'booking.success_desc': 'Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ gọi lại sớm để xác nhận giờ hẹn.',
    'booking.label_name': 'Họ và tên',
    'booking.ph_name': 'Tên của bạn',
    'booking.label_phone': 'Số điện thoại',
    'booking.ph_phone': '090 123 4567',
    'booking.label_service': 'Dịch vụ',
    'booking.ph_service': 'Chọn liệu trình',
    'booking.label_date': 'Ngày',
    'booking.label_time': 'Thời gian đặt lịch',
    'booking.btn_submit': 'Đặt lịch',
    'booking.btn_submitting': 'Đang xử lý...',
    'booking.disclaimer': '*Khi đặt dịch vụ, bạn đồng ý rằng đây là một dịch vụ trị liệu. Không cần tiền boa.',

    'footer.tagline': 'No Tipping Policy',
    'footer.desc': 'A sanctuary for healing and peace in Tan Phu. Experience professional therapy with transparent pricing and heart-centered service.',
    'footer.quick_links': 'Quick Links',
    'footer.visit_us': 'Visit Us',
    'footer.rights': 'Nhẹ Spa Tân Phú. All rights reserved.',
    'footer.designed': 'Designed for relaxation.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    'nav.call_book': 'Call to Book:',
    'nav.no_tip': 'No Tipping Policy',
    'nav.support': 'Customer Support',

    'hero.badge': 'Professional Therapy • No Tipping Required',
    'hero.title_1': 'Healing Touch for',
    'hero.title_2': 'Body & Mind',
    'hero.desc': 'Experience authentic therapeutic massage and acupressure in a serene environment. Transparent pricing, skilled therapists, and pure relaxation.',
    'hero.btn_book': 'Book Appointment',
    'hero.btn_services': 'View Services',
    'hero.rating': '4.9/5.0 rating on Google',

    'about.title': 'About Nhẹ Spa',
    'about.subtitle': 'More than just a massage. We provide care.',
    'about.p1': 'At Nhẹ Spa Tân Phú, we believe that true healing comes from skilled hands and a peaceful heart. Unlike typical spas, we focus heavily on <strong>therapeutic effectiveness</strong>. Our technicians are trained in acupressure and deep tissue techniques to resolve chronic pain in the neck, shoulders, and back.',
    'about.p2': 'We are proud to be one of the few spas with a strict <strong>"No Tipping"</strong> policy. The price you see is the price you pay. This ensures you can fully relax without worrying about extra costs or social expectations.',
    'about.badge': '"Real therapy, not just relaxation."',
    'about.f1_title': 'Caring from the Heart',
    'about.f1_desc': 'Every treatment is customized to your body\'s needs.',
    'about.f2_title': 'Transparent & Honest',
    'about.f2_desc': 'No hidden fees. No tipping required. Just pure service.',
    'about.f3_title': 'Peaceful Atmosphere',
    'about.f3_desc': 'Quiet, clean, and smelling of natural herbs.',

    'services.title': 'Our Treatments',
    'services.subtitle': 'Expert therapies designed to relieve pain and restore balance.',
    'services.not_sure': 'Not sure which treatment is right for you?',
    'services.call': 'Call us for a free consultation',

    'why.title': 'Why Choose Nhẹ Spa?',
    'why.subtitle': 'We focus on what truly matters: your wellness.',

    'reviews.title': 'Voices of Relaxation',
    'reviews.subtitle': 'Rated {rating}/5.0 by our community.',

    'booking.title': 'Book Your Relaxation',
    'booking.subtitle': 'Ready to feel lighter? Schedule your appointment today.',
    'booking.contact_info': 'Contact Information',
    'booking.address': 'Address',
    'booking.phone': 'Phone',
    'booking.hours': 'Opening Hours',
    'booking.hours_desc': 'Opens daily from 09:30 AM',
    'booking.last_booking': 'Last booking at 08:30 PM',
    'booking.req_title': 'Request Appointment',
    'booking.success_title': 'Request Sent!',
    'booking.success_desc': 'Thank you for booking. We will call you shortly to confirm your appointment time.',
    'booking.label_name': 'Full Name',
    'booking.ph_name': 'Your Name',
    'booking.label_phone': 'Phone Number',
    'booking.ph_phone': '090 123 4567',
    'booking.label_service': 'Service',
    'booking.ph_service': 'Select a treatment',
    'booking.label_date': 'Date',
    'booking.label_time': 'Preferred Time',
    'booking.btn_submit': 'Send Request',
    'booking.btn_submitting': 'Processing...',
    'booking.disclaimer': '*By booking, you agree that this is a therapeutic service. No tipping required.',

    'footer.tagline': 'No Tipping Policy',
    'footer.desc': 'A sanctuary for healing and peace in Tan Phu. Experience professional therapy with transparent pricing and heart-centered service.',
    'footer.quick_links': 'Quick Links',
    'footer.visit_us': 'Visit Us',
    'footer.rights': 'Nhẹ Spa Tân Phú. All rights reserved.',
    'footer.designed': 'Designed for relaxation.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};