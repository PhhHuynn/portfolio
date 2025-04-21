export interface Project {
    id: number;
    type: string;
    name: string;
    description: string[];
    technologies: string[];
    repoUrl: string;
    demoWeb: string | null;
    date: string;
    slug: string;
}

const projects: Project[] = [
    {
        id: 1,
        type: "Dự án cá nhân",
        name: "Portfolio",
        description: [
            "Dự án cá nhân xây dựng một trang web portfolio để giới thiệu bản thân.",
        ],
        demoWeb: "dd",
        technologies: ["html", "css", "sass", "JavaScript"],
        repoUrl: "https://github.com/PhhHuynn/My Portfolio",
        date: "01/2025",
        slug: "portfolio",
    },
    {
        id: 2,
        type: "Dự án nhóm",
        name: "UStock",
        demoWeb: null,
        description: [
            "Làm việc trong 1 nhóm gồm 6 thành viên với {vai trò Full-stack Developer}.",
            "Sử dụng {WPF} để xây dựng ứng dụng quản lý hàng hóa.",
            "Xây dựng {tính năng đăng nhập và gửi gmail}, phát triển {giao diện quản lý danh sách hàng hóa và thống kê sản phẩm}",
        ],
        technologies: ["C Sharp", "SQL Server"],
        repoUrl: "https://github.com/haianh1711/QuanLyBanHang",
        date: "01/2025 - hiện tại",
        slug: "ustock",
    },
    {
        id: 3,
        type: "Dự án cá nhân",
        name: "TaH Fashion Store",
        demoWeb: null,
        description: [
            "Tích hợp {tính năng đếm ngược} bằng JavaScript để hiển thị thời gian khuyến mãi.",
            "Xây dựng chức năng thêm, xóa, và cập nhật sản phẩm trong {giỏ hàng} với tổng tiền tự động tính toán.",
            "Dùng {SCSS giúp tối ưu hóa mã CSS} giúp việc đọc và bảo trì dễ dàng hơn",
        ],
        technologies: ["html", "css", "sass", "JavaScript"],
        repoUrl: "https://github.com/PhhHuynn/Fashion-shop",
        date: "07/2024 - 08/2024",
        slug: "TaH",
    },
];

export default projects;
