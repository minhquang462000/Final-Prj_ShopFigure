export function convertToSlug(name:string) {
            return name
                .toLowerCase() // Chuyển tất cả các ký tự thành chữ thường
                .replace(/[^a-z0-9 -]/g, '') // Loại bỏ các ký tự không phải chữ cái, số, khoảng trắng và dấu gạch ngang
                .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
                .replace(/-+/g, '-') // Loại bỏ dấu gạch ngang thừa
                .replace(/^-+|-+$/g, ''); // Loại bỏ dấu gạch ngang ở đầu và cuối chuỗi
        }
export function convertDefault(name: string) {
    return name
}