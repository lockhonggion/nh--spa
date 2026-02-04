import { Service, Review } from './types';

export const BUSINESS_INFO = {
  name: "Nhẹ Spa Tân Phú",
  tagline: "Không nhận TIP – Relax & Heal",
  address_vi: "106/8 Lê Ngã, Phường Phú Trung, Quận Tân Phú, TP. Hồ Chí Minh",
  address_en: "106/8 Lê Ngã, Phường Phú Trung, Quận Tân Phú, TP. Hồ Chí Minh",
  phone: "+84 764 446 560",
  displayPhone: "0764 446 560",
  rating: 4.9,
  reviewCount: 356,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460232532734!2d106.6393683!3d10.7760195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea168a65c0b%3A0x2a22d0247239128!2zMTA2LzggTMOqIE5nw6MsIFBow7ogVHJ1bmcsIFTDom4gUGjDug!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
};

export const SERVICES: Service[] = [
  {
    id: 'therapeutic',
    title_en: 'Therapeutic Massage',
    description_en: 'Deep tissue therapy focusing on relieving chronic pain and muscle tension.',
    title_vi: 'Massage Trị Liệu',
    description_vi: 'Trị liệu mô sâu tập trung giải tỏa đau nhức mãn tính và căng cơ.',
    iconName: 'Activity',
    duration_en: '60 / 90 mins',
    duration_vi: '60 / 90 phút'
  },
  {
    id: 'neck-shoulder',
    title_en: 'Neck & Shoulder Relief',
    description_en: 'Specialized treatment for office syndrome, reducing stiffness and headaches.',
    title_vi: 'Trị Liệu Cổ Vai Gáy',
    description_vi: 'Liệu trình chuyên sâu cho hội chứng văn phòng, giảm cứng khớp và đau đầu.',
    iconName: 'Flower',
    duration_en: '45 / 60 mins',
    duration_vi: '45 / 60 phút'
  },
  {
    id: 'acupressure',
    title_en: 'Acupressure Therapy',
    description_en: 'Traditional technique stimulating pressure points to improve circulation.',
    title_vi: 'Ấn Huyệt Trị Liệu',
    description_vi: 'Kỹ thuật truyền thống tác động vào các huyệt đạo để cải thiện tuần hoàn máu.',
    iconName: 'Sparkles',
    duration_en: '60 / 90 mins',
    duration_vi: '60 / 90 phút'
  },
  {
    id: 'relaxation',
    title_en: 'Relaxation Massage',
    description_en: 'Gentle, soothing strokes to reduce stress and promote deep sleep.',
    title_vi: 'Massage Thư Giãn',
    description_vi: 'Các động tác vuốt nhẹ nhàng giúp giảm căng thẳng và hỗ trợ giấc ngủ sâu.',
    iconName: 'Smile',
    duration_en: '60 / 90 mins',
    duration_vi: '60 / 90 phút'
  }
];

export const WHY_CHOOSE_US = [
  {
    title_en: 'No Tipping Policy',
    description_en: 'Transparent pricing with no hidden costs or pressure. We pay our staff well so you can relax.',
    title_vi: 'Không nhận TIP',
    description_vi: 'Giá cả minh bạch, không phí ẩn. Chúng tôi trả lương tốt cho nhân viên để bạn an tâm thư giãn.'
  },
  {
    title_en: 'Skilled Therapists',
    description_en: 'Our team is trained in acupressure and therapeutic techniques, not just basic massage.',
    title_vi: 'KTV Tay Nghề Cao',
    description_vi: 'Đội ngũ được đào tạo bài bản về ấn huyệt và trị liệu, không chỉ là massage cơ bản.'
  },
  {
    title_en: 'Hygiene Priority',
    description_en: 'Clean towels, sanitized equipment, and a fresh environment for every guest.',
    title_vi: 'Ưu Tiên Vệ Sinh',
    description_vi: 'Khăn sạch, thiết bị được khử trùng và môi trường trong lành cho từng khách hàng.'
  },
  {
    title_en: 'Peaceful Atmosphere',
    description_en: 'A quiet sanctuary away from the city noise, designed for true mental rest.',
    title_vi: 'Không Gian Yên Tĩnh',
    description_vi: 'Một nơi trú ẩn yên bình tách biệt khỏi ồn ào phố thị, thiết kế để nghỉ ngơi thực sự.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'TrầnMinhQuân',
    rating: 5,
    content: 'Sản phẩm tốt, dịch vụ ok, trước khi trải nghiệm tôi thực sự rất đau mõi cơ thể và khi được anh điều trị cơ thể tải điểm này, và rất rất là hài lòng về dịch vụ',
    date: '3 tháng trước'
  },
  {
    id: 'r2',
    author: 'Đông Du',
    rating: 5,
    content: 'Dịch vụ rất tốt. Các bạn nhân viên rất nhiệt tình và chuyên nhiệp ❤️.',
    date: '2 tháng trước'
  },
  {
    id: 'r3',
    author: 'Nathan Pham',
    rating: 5,
    content: 'Nhân viên quá trời dễ thương, nhiệt tình nhe !',
    date: '1 tháng trước'
  },
  {
    id: 'r4',
    author: 'Thảo Quỳnh',
    rating: 5,
    content: 'Mọi người nhiệt tình dễ thương lắm, chị My làm siêu đúng gu, nhân viên nhắc mình kiêng nước sau khi làm lun nè. Không gian sạch sẽ, giá rẻ mà được uống trà nóng ngâm chân, sẽ quay lại nhìu lần',
    date: '2 tháng trước'
  },
  {
    id: 'r5',
    author: 'Thái Tuấn',
    rating: 5,
    content: 'Nhân viên lễ phép, dễ thương. Không gian dễ chịu, ktv tốt nhenn',
    date: '2 tháng trước'
  },
  {
    id: 'r6',
    author: 'Nguyên Phạm',
    rating: 5,
    content: 'Dịch vụ tuyệt vời, đáng để trải nghiệm. Nhân viên nhiệt tình, KTV tay nghề giỏi',
    date: '2 tháng trước'
  },
  {
    id: 'r7',
    author: 'Như Nguyễn',
    rating: 5,
    content: 'Spa dịch vụ tốt, ktv nhiệt tình, chỗ gửi xe rộng rãi',
    date: '1 tháng trước'
  },
  {
    id: 'r8',
    author: 'cokhi maymoc',
    rating: 5,
    content: 'Giá tốt - dịch vụ tốt - thái độ tốt , đi với bạn đa số vào ca trưa rất oke. Có 2 local gui đánh giá thì mọi người an tâm làm.',
    date: '4 tháng trước'
  },
  {
    id: 'r9',
    author: 'Hiếu Hoàng',
    rating: 5,
    content: 'Nhân viên tận tình, dịch vụ rất tốt',
    date: '2 tháng trước'
  },
  {
    id: 'r10',
    author: 'Thư Lê',
    rating: 5,
    content: 'Bé Tiền làm lực tốt. Spa Nhiệt tình. Sẽ quay lại',
    date: '1 tháng trước'
  },
  {
    id: 'r11',
    author: 'Phuc Nguyen Tran',
    rating: 5,
    content: 'Spa trị liệu rất chuyên nghiệp, không gian yên tĩnh và thư giãn ngay từ khi bước vào.',
    date: '1 tuần trước'
  },
  {
    id: 'r12',
    author: 'Bảo Dương',
    rating: 5,
    content: 'Dịch vụ tốt, không gian tốt. Nhân viên nhiệt tình sẽ quay lại',
    date: '4 tháng trước'
  },
  {
    id: 'r13',
    author: 'Nguyễn An',
    rating: 5,
    content: 'Rất tốt và đáng trải nghiệm dịch vụ.',
    date: '1 tháng trước'
  },
  {
    id: 'r14',
    author: 'Hưng Dương',
    rating: 5,
    content: 'Mình đã đi nhiều lần, nhân viên chu đáo dễ thương, trị liệu có hiệu quả',
    date: '3 tháng trước'
  },
  {
    id: 'r15',
    author: 'La Do',
    rating: 5,
    content: 'Dịch vụ tốt, đúng như quảng cáo tiktok. Sẽ quay lại ủng hộ',
    date: '2 tháng trước'
  },
  {
    id: 'r16',
    author: 'Trịnh Vũ Trọng Nghĩa',
    rating: 5,
    content: 'Mình đã đến và trải nghiệm dịch vụ lần thứ 2 tại cơ sở. Về cơ sở: nằm trong khu dãy nhà phố riêng tư, có chốt bảo vệ nên cũng mang đến cảm giác an tâm.',
    date: '2 tháng trước'
  },
  {
    id: 'r17',
    author: 'Tran Duc',
    rating: 5,
    content: 'Kĩ thuật viên tay nghề cao. Có phòng riêng. Giá mềm mà nhiều combo',
    date: '1 tháng trước'
  },
  {
    id: 'r18',
    author: 'Hieu Nguyen',
    rating: 5,
    content: 'Dịch vụ tuyệt vời, nhân viên vui vẻ nhiệt tình, dặn dò khách kỹ lưỡng sau khi làm liệu trình rất chuyên nghiệp. Rất đáng trải nghiệm và lâu dài.',
    date: '2 tháng trước'
  }
];