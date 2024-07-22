
export default function Footer(){
    return(
            
        <div class="footer-container">

      
            <div id="sns-area">
                <div class="sns-intro">
                    ブログ・SNSについて
                </div>
                <div class="sns-container">
                    <a href="https://ameblo.jp/nantokashiyomaike" target="_blank" title="外部サイトに接続　新規ウインドウで開きます" class="sns-link">
                        <div class="sns-item">
                            <img src="website-images/Ameba-blog-icon.png" alt="Amebaブログ"/>
                            <p class="sns-name">Amebaブログ</p>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/nantokashiyomaike" target="_blank" title="新規ウインドウで開きます" class="sns-link">
                        <div class="sns-item">
                            <img src="website-images/Instagram-icon.png" alt="インスタグラム"/>
                            <p class="sns-name">公式Instagram</p>
                        </div>
                    </a>
                </div>
            </div>
        
            <footer>
                <p class="footer-title">お問い合わせはこちら</p>
                <p class="footer-text">何かお困りのことがございましたら、お問い合わせボタンからメールを送っていただくか、インスタグラム等のダイレクトメール(DM)から受け付けております。</p>
                <p class="footer-text">お気軽にご相談ください。</p>
                <div class="footer-button-container">
                    <a class="footer-button" href="mailto:nantokashiyomaike0609@gmail.com" title="メールアプリが開きます">お問い合わせする</a>
                </div>
                    <p class="footer-copyright">&copy; 2024 nantokashiyomaike. All right reserved.</p>
            </footer>
    </div>
    );
}