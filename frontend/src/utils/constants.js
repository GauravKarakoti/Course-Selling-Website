export const BASE_API_URL = 'http://localhost:3000/api/v1';

export const USER_ROUTES = {
  LOGIN: '/user/login',
  SIGNUP: '/user/signup',
  PURCHASE: '/course/purchase',
  VIEW_PURCHASES: '/user/purchases',
};

export const ADMIN_ROUTES = {
  LOGIN: '/admin/login',
  SIGNUP: '/admin/signup',
  CREATE_COURSE: '/admin/course',
  UPDATE_COURSE: '/admin/course/update',
  VIEW_COURSES: '/admin/course/bulk',
};
