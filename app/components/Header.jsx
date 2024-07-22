import Image from "next/image";


export default function Header() {
  return (
    <header>
      <div class="header">
        <div class = "left-header-content">
          <Image src="https://placehold.jp/150x150.png" alt="ロゴ" class="header-icon" width={100} height={100}/> 
          <a class="icon-name" href="#">Meijo CUP</a>
        </div>
        <div class = "right-header-content">
          <a class="top-button" href="">トップへ戻る</a>
        </div>  
      </div>
    
    <nav class="nav">
        <ul class="nav__menu">
            <li class="nav__item">
                <a class="nav__link" href="/schedule">
                    <Image class="nav__icon" src="https://placehold.jp/150x150.png" alt="タイムスケジュール" width={100} height={100}/>
                    <span>タイムスケジュール</span>
                </a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="/players">
                    <Image class="nav__icon" src="https://placehold.jp/150x150.png" alt="出場選手リスト" width={100} height={100}/>
                    <span>出場選手リスト</span>
                </a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="regulation.html">
                    <Image class="nav__icon" src="https://placehold.jp/150x150.png" alt="レギュレーション" width={100} height={100}/>
                    <span>レギュレーション</span>
                </a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="/results">
                    <Image class="nav__icon" src="https://placehold.jp/150x150.png" alt="試合結果" width={100} height={100}/>
                    <span>試合結果</span>
                </a>
            </li>
        </ul>
    </nav>
    </header>

  );
}
