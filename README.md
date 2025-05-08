# Where it's @


## Externa bibliotek


**"Canvas Confetti"**

Canvas confetti är ett bibliotek som man kan använda sig av för att visa en confetti-animation på skärmen, som kan triggas av t.ex. ett klick på en knapp eller fira en särskild händelse i appen.
Man anropar t.ex. confetti({...options}) där man kan ställa in riktning, mängd, färger, spridning m.m. Detta gjorde jag i en egen javascript-fil. Detta skapar en tillfällig canvas ovanpå resten av sidan utan att påverka den.

Jag använde den i min app när man skickar en order (klickar på skicka order knappen), genom att importera och anropa funktionen fireConfetti i handleSubmit på CartPage. Jag använde den just där för att skapa en positiv känsla av att köpet har gått igenom och man har sina biljetter. Eftersom att det är en app där man köper biljetter till konserter så tyckte jag att det passade extra bra.



**"React Toastify"**

React tostify är ett bibliotek som gör det enkelt att visa notiser och meddelanden i en react-app. Man behöver lägga in en ToastContainer i sin app som är en container där alla toastmeddelanden i sin app visas. Jag la den i App.jsx så att meddelandena ska kunna visas över alla sidor. Sen genom att använda sig av toast funktionen på den sida man vill att den ska triggas så kan man välja innehållet och typen på meddelandet, som success, info, error osv. Man kan även lägga till ett className för att sedan stylea notisen som man vill (den har även förbestämda classnamn som man får använda sig av).

Jag använde mig av toastify i min app på CartPage när man klickar på lägg i varukorg-knappen. Jag använde mig av toast.success för att visa användaren direkt feedback på att funktionen faktiskt gick igenom. Innan så visades ingenting och som användare hade jag själv blivit lite osäker på om det verkligen fungerade, så det var en perfekt plats att använda sig av det.



**"Framer Motion"**

Framer motion är ett animationsbibliotek för react som använder komponentbaserade animationer. Genom att använda motion.div istället för ett vanligt div-element får man tillgång till många olika färdiga animationsegenskaper som t.ex. initial - hur det ser ut innan, animate - hur det ser ut när det visas, exit - hur det ser ut när det ska försvinna och transition - hur lång tid animationen ska ta och hur den ska kännas (t.ex. mjuk, snabb, långsam). Sen finns också något som heter AnimatePresence som gör att react vet när en komponent håller på att försvinna, så att den kan få en utgångs-animation. Utan det skulle sidan bara försvinna direkt.

Jag använder mig av framer motion i min app för att få till snygga sidövergångar. Jag valde att använda mig av en slide-effekt så när man byter sida så glider nästa sida in från höger eller vänster beroende på var man klickat ifrån. Jag valde att göra från olika håll för att navigationen ska kännas mer naturlig och att man faktiskt flyttar sig över appen. Alla dessa sidor är inlindade i motion.div så att jag kan styra hur de visas. I min Layout.jsx använder jag AnimatePresence och useLocation() för att kunna animera olika routes (vägar/sidor). Detta gör också att appen känns mer proffsig och lite roligare att använda då det finns ganska många olika sidor som man navigeras mellan. Här upptäckte jag också att jag var kunde lägga min Navbar i App.jsx istället för varje enskild sida. Detta upptäckte jag så Navbaren förljde med i animationen varje gång man bytte sida, vilket inte var så snyggt.


