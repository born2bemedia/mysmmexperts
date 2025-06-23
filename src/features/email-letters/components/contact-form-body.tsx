import { htmlTemplate } from './html-template';

export const contactFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="width: 696px; height: 142px" src="https://images2.imgbox.com/ea/1f/kMVI4fAe_o.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 30px; color: #323232;">Дякуємо за звернення!</p>
          <p class="text">Доброго дня, ${username}</p>
          <p class="text">Дякуємо за звернення. Ми вже працюємо над вашим запитом і незабаром з вами зв'яжемося.</p>
          <p class="text">Якщо виникли питання, пишіть на contact@mysmmexperts.com або телефонуйте: +380976930563.</p>
          <p class="text">Гарного дня!</p>
          <p class="text">З повагою, служба підтримки клієнтів</p>
        </div>
        <footer style="margin-top: 12px;">
          <img style="width: 696px; height: 90px" src="https://images2.imgbox.com/b6/3a/6PMhc8Ay_o.png" alt="full-logo" class="logoSm" />
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        width: 696px;
        margin: 0 auto;
        background: #ffffff;
      }
      
      .main {
        margin-top: 12px;
        padding: 40px;
        border-radius: 12px;
        background: #FDFDFD;
      }
      
      .header {
        overflow: hidden;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        color: #323232;
        font-size: 16px;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
      
      .footer {
        display: flex;
        border-radius: 12px;
        background: #FFE6E0;
        padding: 20px;
      }
    `,
  });
};
