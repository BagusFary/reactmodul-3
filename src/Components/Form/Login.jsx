import "./Login.css";

export default function Login() {
    return(
        <>
        <div className="kotak_login">
            <p className="tulisan_login">Silahkan login</p>
        
            <form>
                <label>Username</label>
                <input type="text" name="username" className="form_login" placeholder="Username atau email .."/>
        
                <label>Password</label>
                <input type="text" name="password" className="form_login" placeholder="Password .."/>
        
                <input type="submit" className="tombol_login" value="LOGIN"/>
        
                <br/>
                <br/>
                <center>
                    <a class="link" href={" "}>kembali</a>
                </center>
            </form>
            
        </div>
        </>
    )
}