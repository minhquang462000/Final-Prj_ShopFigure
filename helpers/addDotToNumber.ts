export function addDotToNumber(numberString :any) {
    // Kiểm tra xem chuỗi có phải là số không
    if (isNaN(numberString)) {
        return "Không phải là số";
    }
    if (numberString.length <= 3) {
        return numberString;
    }
    // Tạo một mảng để lưu trữ các phần tử được chia thành các nhóm ba chữ số
    let groups = [];

    // Tạo một biến tạm thời để lưu trữ mỗi nhóm ba chữ số
    let tempGroup = "";

    // Duyệt qua chuỗi số từ cuối về đầu
    for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
        // Thêm mỗi chữ số vào biến tạm thời
        tempGroup = numberString[i] + tempGroup;

        // Nếu đã thêm ba chữ số hoặc đã duyệt qua hết chuỗi
        if ((count + 1) % 3 === 0 || i === 0) {
            // Thêm biến tạm thời vào mảng và reset biến tạm thời
            groups.unshift(tempGroup);
            tempGroup = "";
        }
    }

    // Kết hợp các nhóm ba chữ số bằng dấu chấm và trả về kết quả
    return groups.join(",");
}