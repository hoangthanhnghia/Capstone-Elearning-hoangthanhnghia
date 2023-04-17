import { https } from "./config";

export const eLearningServ = {
  getCourseList: (page) => {
    return https.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", {
      params: {
        MaNhom: "GP02",
        page,
        pageSize: 8,
      },
    });
  },
  getCategory: () => {
    return https.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCourseListFollowCategory: (maDanhMuc) => {
    return https.get(
      "/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP02&maDanhMuc=" + maDanhMuc
    );
  },
  getInfoCourse: (maKhoaHoc) => {
    return https.get(
      "/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=" + maKhoaHoc
    );
  },
  registerCourse: (data) => {
    return https.post("/QuanLyKhoaHoc/DangKyKhoaHoc", data);
  },
  deleteCourse: (data) => {
    return https.post("/QuanLyKhoaHoc/HuyGhiDanh", data);
  },
};
