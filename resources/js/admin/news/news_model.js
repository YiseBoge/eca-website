export const NewsModel = {
  title: '',
  image: '',
  link: '',
  category: '',
  description: '',
  is_featured: false,
};

export const Rules = {
  required: [val => (val || '').length > 0 || 'This field is required'],
  min_20: [val => (val || '').length > 20 || 'The minimum required character is 20'],
  min_50: [val => (val || '').length > 50 || 'The minimum required character is 20'],
  min_100: [val => (val || '').length > 200 || 'The minimum required character is 200'],
};
