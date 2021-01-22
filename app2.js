let a = []
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let F = 0;
let n = Number(prompt("Nhập số lượng sinh viên:"));
// console.log(n);
if (n > 2) {
    for (var i = 0; i < n; i++) {
        let tp = prompt("Điểm thành phần:");
        let cuoi = prompt("Điểm cuối kì:");
        a.push(tp * 0.4 + cuoi * 0.6)
        if (a[i] >= 8 && a[i] <= 10) {
            A += 1;
        }
        if (a[i] >= 7 && a[i] < 8) {
            B += 1;
        }
        if (a[i] >= 6 && a[i] < 7) {
            C += 1;
        }
        if (a[i] >= 4 && a[i] < 6) {
            D += 1;
        } else {
            F += 1;
        }
    }
    let xs = (B / n) * 100;
    console.log(xs + "%");
    console.log(A + " sinh viên A");
    console.log(F + " sinh viên trượt");
    // console.log(a);
} else {
    alert('ít nhất 3 sinh viên');
}