import './App.css'
function Profile() {
    const name = "Nguyễn Huyền Châm";
    const studentId = "PH59617";
    const major = "Lập trình Web";

    return (
        <div className="profile-card">
            <h2>Thông tin sinh viên</h2>
            <p>
                <strong>Họ tên:</strong> {name}
            </p>
            <p>
                <strong>Mã SV:</strong> {studentId}
            </p>
            <p>
                <strong>Ngành học:</strong> {major}
            </p>
        </div>
    );
}

export default Profile;