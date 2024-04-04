import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api.js";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      az: {
        translation: {
          aze: "Aze",
          eng: "İng",
          rus: "Rus",
          headerTitle: "Bakıda asanlıqla avtomobil tapın",
          headerSubTitle:
            "Büdcənizə uyğun avtomobili axtarın və bir kliklə sifariş edin, Rahatlıqla və əminliiklə avtomobildən istifadə edin",
          headerButton: "Mövcud Maşınlara Baxın",
          whyChoose: "Niyə bizi seçməlisiniz",
          whyChooseTitle:
            "Biz icarə müqavilələri ilə ən yaxşı icarə təcrübəsini təklif edirik",
          bPriceT: "Ən yaxşı qiymətə zəmanət verilir",
          bPriceST: "Bakıda ən yaxşı qiymətə performanslı avtomobillər",
          dToAirT: "Hava Limanına Çatdırılma",
          dToAirST: "Avtomobilinizi hava limanına çatdırırıq",
          hourSupportT: "24/7 Dəstək",
          hourSupportST: "Hər zaman sizə dəstək olmağa hazırıq",
          expDriverT: "Təcrübəli sürücü",
          expDriverST: "İstəyə uyğun təcrübəli sürücülər",
          hourDeliverT: "24 saat Maşınların çatdırılması",
          hourDeliverST: "Günün istənilən vaxtı avtomobilinizi çatdırırıq",
          availableCars: "Mövcud Maşınlar",
          ecoRent: "Ekonom Rent a car",
          middleRent: "Orta Rent a car",
          premiumRent: "Premium Rent a car",
          suvRent: "Suv Rent a car",
          ecoClass: "Ekonom Sinif",
          middleClass: "Orta Sinif",
          premiumClass: "Premium Sinif",
          suvClass: "Suv Sinif",
          sedan: "Sedan",
          suv: "Suv",
          auto: "Avtomat",
          gas: "Benzin",
          diesel: "Dizel",
          doors: "4 Qapı",
          seater: "Oturacaq",
          day: "Gün",
          moreInfo: "Əlavə məlumat",
          contactOption: "Əlaqə məlumatları",
          bluetooth: "Blutuz",
          usbIn: "USB giriş",
          usbCh: "USB adapter",
          heatedSeat: "Oturacaqların qızdırılması",
          backupCam: "Arxa kamera",
          cascoIns: "Kasko sığortalı",
          carPlay: "Apple & Android CarPlay",
          priceTip: "*Əlavə günlər endirimli qiymət ilə hesablanacaq",
          bookNow: "İndi sifariş et",
          airport: "Aeroport",
          hotel: "Hotel",
          pickUpDate: "Götürülmə Tarixi",
          pickUpLocation: "Götürülmə Yeri",
          returnDate: "Qaytarılma Tarixi",
          returnLocation: "Qaytarılma Yeri",
          contactInfo: "Əlaqə məlumatları",
          name: "Ad",
          surname: "Soyad",
          whatNumber: "Mobil nömrə",
          email: "Email",
          features: "Özəlliklər",
          iAmOver: "Yaşım 20-dən yuxarıdır",
        },
      },
      en: {
        translation: {
          aze: "Aze",
          eng: "En",
          rus: "Ru",
          headerTitle: "Find, book and rent a car in Baku easily",
          headerSubTitle:
            "Search for your budget passed car and book one click, Use the car with comfort and confidence",
          headerButton: "Look Available Cars",
          whyChoose: "Why Choose Us",
          whyChooseTitle:
            "We offer the best rental experience with rental deals",
          bPriceT: "Best Price guaranteed",
          bPriceST: "Best price performance cars in baku",
          dToAirT: "Delivery To Airport",
          dToAirST: "We are delivering your car to airport",
          hourSupportT: "24/7 Support",
          hourSupportST: "Every time we are availabe to support you",
          expDriverT: "Experienced driver",
          expDriverST: "We have experienced drivers if you want",
          hourDeliverT: "24 Hour Car delivery",
          hourDeliverST: "Any time in a day we deliver your car",
          availableCars: "Available Cars",
          ecoRent: "Econom Rent a car",
          middleRent: "Middle Rent a car",
          premiumRent: "Premium Rent a car",
          suvRent: "Suv Rent a car",
          ecoClass: "Econom Class",
          middleClass: "Middle Class",
          premiumClass: "Premium Class",
          suvClass: "Suv Class",
          sedan: "Sedan",
          suv: "Suv",
          auto: "Auto",
          gas: "Gas",
          diesel: "Diesel",
          doors: "4 Doors",
          seater: "Seater",
          day: "Day",
          moreInfo: "More Info",
          contactOption: "Contact Options",
          bluetooth: "Bluetooth",
          usbIn: "USB input",
          usbCh: "USB charger",
          heatedSeat: "Heated Seats",
          backupCam: "Backup camera",
          cascoIns: "Casco Insurance",
          carPlay: "Apple & Android CarPlay",
          priceTip: "*More days will be calculated with discounted price",
          bookNow: "Book Now",
          airport: "Airport",
          hotel: "Hotel",
          pickUpDate: "Pick up Date",
          pickUpLocation: "Pick up Location",
          returnDate: "Return Date",
          returnLocation: "Return Location",
          contactInfo: "Contact Information",
          name: "Name",
          surname: "Surname",
          whatNumber: "Whatsapp Number",
          email: "Email",
          features: "Features",
          iAmOver: "I am over 20 years old",
        },
      },
      ru: {
        translation: {
          aze: "Азе",
          eng: "Анг",
          rus: "Ру",
          headerTitle:
            "Найти, забронировать и арендовать автомобиль в Баку легко.",
          headerSubTitle:
            "Найдите свой бюджетный автомобиль и забронируйте его одним щелчком мыши. Пользуйтесь автомобилем с комфортом и уверенностью.",
          headerButton: "Посмотреть доступные автомобили",
          whyChoose: "почему выбрали нас",
          whyChooseTitle:
            "Мы предлагаем лучший опыт аренды с арендными предложениями.",
          bPriceT: "Гарантия лучшей цены",
          bPriceST: "Машины с лучшим соотношением цены и качества в Баку.",
          dToAirT: "Доставка в аэропорт",
          dToAirST: "Мы доставляем ваш автомобиль в аэропорт",
          hourSupportT: "Круглосуточная поддержка",
          hourSupportST: "Каждый раз мы готовы поддержать вас",
          expDriverT: "Опытный водитель",
          expDriverST: "У нас есть опытные водители, если хотите",
          hourDeliverT: "Круглосуточная подача автомобиля",
          hourDeliverST: "В любое время суток мы доставим ваш автомобиль",
          availableCars: "Доступные автомобили",
          ecoRent: "Эконом Прокат автомобилей",
          middleRent: "Средний Прокат автомобилей",
          premiumRent: "Премиум Прокат автомобилей",
          suvRent: "Сув Прокат автомобилей",
          ecoClass: "Эконом-класс",
          middleClass: "Средний класс",
          premiumClass: "Премиум-класс",
          suvClass: "Сув Класс",
          sedan: "Седан",
          suv: "Сув",
          auto: "Авто",
          gas: "Бенсин",
          diesel: "Дизель",
          doors: "4 Двери",
          seater: "сиденья",
          day: "День",
          moreInfo: "Больше информации",
          contactOption: "Варианты контактов",
          bluetooth: "Bluetooth",
          usbIn: "USB-вход",
          usbCh: "USB зарядное устройство",
          heatedSeat: "Сиденья с подогревом",
          backupCam: "Задняя камера",
          cascoIns: "Каско Страхование",
          carPlay: "Apple и Android CarPlay",
          priceTip: "*Дополнительные дни будут рассчитаны со скидкой.",
          bookNow: "Забронируйте сейчас",
          airport: "Аэропорт",
          hotel: "Гостиница",
          pickUpDate: "Подобрать дату",
          pickUpLocation: "Выбрать место",
          returnDate: "Дата возврата",
          returnLocation: "Место возврата",
          contactInfo: "Контактная информация",
          name: "Имя",
          surname: "Фамилия",
          whatNumber: "Номер WhatsApp",
          email: "Электронная почта",
          features: "Функции",
          iAmOver: "мне больше 20 лет",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
  });

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
