<?
    include_once('./kolisnet_header.php');

    $adminId = $_POST['adminId'];
    $adminPw = $_POST['adminPw'];

    $sql = "SELECT  *
            FROM    admin_kolisnet_table 
            WHERE   adminId='$adminId' AND adminPw='$adminPw'";
    $res = mysqli_query($conn, $sql);

    if( mysqli_num_rows($res) > 0 ){
        $record = mysqli_fetch_array($res);
        echo '{"아이디": "'.$record['adminId'].'", "이름": "'.$record['adminName'].'", "휴대폰": "'.$record['adminHp'].'"}';
    }
    else{
        echo '';
    }

?>