import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
})
export class IntroducaoComponent implements OnInit {
  // Links para mídias sociais
  social_medias: any;
  constructor() {}

  ngOnInit(): void {
    this.social_medias = [
      {
        img: 'https://cdn-icons-png.flaticon.com/128/2504/2504911.png',
        title: 'GitHub',
        link: 'https://github.com/BrunoSchmitz4',
      },
      {
        img: 'https://cdn-icons-png.flaticon.com/128/8109/8109508.png',
        title: 'Gmail',
        link: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKHQdcKGpqMsNXmkHGrgJMdRqTvzwRPkMmTGdPQNPgDkHzrxBmsrQNscCsSdQmrvkBBgBbq',
      },
      {
        img: 'https://cdn-icons-png.flaticon.com/128/1384/1384072.png',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/bruno-schmitz-da-silva-06183b213/',
      }
    ];
  }
}
