import Image from "next/image";

import SlideShow from "./components/SlideShow";
export default function Page() {
  return (
    <>
    <main>
      <div id="slideshow-container" >
        
        <SlideShow/>

      <div id="text-container">
              こちらは名城大学の学生団体「<b>なんとかしよまいけ</b>」が主催するキッズランバイク大会「名城CUP」の第2回大会について情報を発信するホームページです。
          <br/><b>※エントリー開始時期は<b style={{ color: 'red' }}>8月1日（木）</b>を予定しております。続報にご期待ください！</b></div>
      </div>

      <div class="news-container">
          <div class="news-header">
            <div>
              <h2>お知らせ <span>News</span></h2>
            </div>
            <a href="newslist.html" class="news-link">一覧へ</a>
          </div>
          <div class="news-list">
          
            <div class="news-item">
              <span class="newicon">NEW!</span>
              <span class="date">2024.07.01</span>
              <a  href="news1.html" class="news-title">第2回MeijoCUPWebサイトを開設しました！</a>
            </div>
          
            <div class="news-item">
              <span class="newicon">NEW!</span>
              <span class="date">2024.07.04</span>
              <a  href="news2.html" class="news-title">大会レギュレーションを公開しました</a>
            </div>
          </div>
      </div>


      <div class="charm">
        <img src="website-images/第2回MeijoCUPの紹介チラシ案3.png"  alt="チラシ"/>
      </div>

      <div class="entry-button-container">
        <span href="https://www.meijo-u.ac.jp/" class="entry-button">大会にエントリーする &nbsp;<span class="arrow">→</span></span> 
      </div>

      <div class="headline">ご協力いただいている企業・団体</div>
      <div class="intro-title">ツール・ド・南砺実行委員会</div>
      <div class="container">
        <div class="left-content">
            <div class="text">&emsp;私たちがこのランバイク大会をプレイベントとして開かせてもらっているツール・ド・南砺というサイクリング大会の実行委員会です。名城カップを開くにあたって多大な支援を頂きました。</div>
            <div class="image">
              <img src="website-images/pct14.png" alt="ツール・ド・南砺実行委員会の写真"/>
            </div>
        </div>
        <a href="https://johanacycling.jp/"> 
        <div class="intro1-button-container">
          <button>詳しくはこちら</button>
        </div>
        </a>
      </div>

      <div class="intro-title">富山県南砺市</div>
      <div class="container">
        <div class="right-content">
            <div class="text">&emsp;私たち名城大学が南砺市を学生の力で盛り上げるために南砺市からご協力をいただき、さらに南砺市が活性化するように活動していくことを目標として結ばれた協定です。現在は南砺市の地元の祭りやイベントに参加し、地元の人との交流も深まって来ています！</div>
            <div class="image">
              <img src="website-images/pct12.jpg" alt="富山県南砺市の写真"/>
            </div>
        </div>
        <a href="https://www.meijo-u.ac.jp/news/detail_29756.html"> 
        <div class="intro2-button-container">
          <button>南砺市との連携について</button>
        </div>
        </a>
      </div>

      <div class="intro-title">合同会社wild runner 様</div>
      <div class="container">
        <div class="left-content">
            <div class="text">&emsp;前回の第1回MEIJO CUP から私たちををサポートしてくださっている団体です！ワイルドランナーは愛知県岡崎市を中心として活動をしており、初心者から上級者まで幅広いレースを開催しています。</div>
            <div class="image">
              <img src="website-images/pct13.jpg" alt="合同会社wild runnerの写真"/>
            </div>
        </div>
        <a href="https://wildrunner-llc.jp/"> 
        <div class="intro3-button-container">
          <button>wild runner 公式HPはこちら</button>
        </div>
        </a>
      </div>
  </main>
  </>
  );
}
