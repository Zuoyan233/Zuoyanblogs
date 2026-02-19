import Key from "../i18nKey";
import type { Translation } from "../translation";

export const tr: Translation = {
	[Key.home]: "Anasayfa",
	[Key.about]: "Hakkında",
	[Key.archive]: "Arşiv",
	[Key.search]: "Ara",
	[Key.sponsors]: "sponsorlar",
	[Key.feedback]: "Geri bildirim",
	[Key.other]: "Diğer",

	// Çeviri paneli başlığı
	[Key.translateHeader]: "Dil Seçin",

	// Gezinme çubuğu başlıkları
	[Key.navLinks]: "Bağlantılar",
	[Key.navMy]: "Benim",
	[Key.navAbout]: "Hakkında",
	[Key.navOthers]: "Diğer",

	[Key.tags]: "Etiketler",
	[Key.categories]: "Kategoriler",
	[Key.recentPosts]: "Son Gönderiler",
	[Key.postList]: "Gönderi Listesi",
	[Key.tableOfContents]: "İçindekiler",
	[Key.tocEmpty]: "İçindekiler tablosu yok",

	// Duyuru
	[Key.announcement]: "Duyuru",
	[Key.announcementClose]: "Kapat",

	[Key.comments]: "Yorumlar",
	[Key.friends]: "Arkadaşlar",
	[Key.friendsSubtitle]: "Daha fazla mükemmel web sitesi keşfedin",
	[Key.friendsSearchPlaceholder]: "Arkadaş adını veya açıklamasını arayın...",
	[Key.friendsFilterAll]: "Tümü",
	[Key.friendsNoResults]: "Eşleşen arkadaş bulunamadı",
	[Key.friendsVisit]: "Ziyaret",
	[Key.friendsCopyLink]: "Bağlantıyı Kopyala",
	[Key.friendsCopySuccess]: "Kopyalandı",
	[Key.friendsTags]: "Etiketler",
	[Key.untitled]: "Başlıksız",
	[Key.uncategorized]: "Kategorilendirilmemiş",
	[Key.noTags]: "Etiket Yok",

	[Key.wordCount]: "kelime",
	[Key.wordsCount]: "kelime",
	[Key.minuteCount]: "dakika",
	[Key.minutesCount]: "dakika",
	[Key.postCount]: "gönderi",
	[Key.postsCount]: "gönderiler",

	[Key.themeColor]: "Tema Rengi",

	[Key.lightMode]: "Açık",
	[Key.darkMode]: "Koyu",
	[Key.systemMode]: "Sistem",

	[Key.more]: "Daha Fazla",

	[Key.author]: "Yazar",
	[Key.publishedAt]: "Yayınlanma Tarihi",
	[Key.license]: "Lisans",
	[Key.anime]: "Anime",
	[Key.diary]: "Günlük",

	// Anime Sayfası
	[Key.animeTitle]: "Anime Listem",
	[Key.animeSubtitle]: "Anime yolculuğumu kaydet",
	[Key.animeStatusWatching]: "İzleniyor",
	[Key.animeStatusCompleted]: "Tamamlandı",
	[Key.animeStatusPlanned]: "Planlandı",
	[Key.animeStatusOnHold]: "Beklemede",
	[Key.animeStatusDropped]: "Bırakıldı",
	[Key.animeFilterAll]: "Tümü",
	[Key.animeYear]: "Yıl",
	[Key.animeStudio]: "Stüdyo",
	[Key.animeEmpty]: "Hayır anime verileri",
	[Key.animeEmptyBangumi]:
		"Lütfen Bangumi yapılandırmasını veya ağ bağlantısını kontrol edin",
	[Key.animeEmptyLocal]:
		"Lütfen anime bilgilerini src/data/anime.ts dosyasına ekleyin",

	// Günlük Sayfası
	[Key.diarySubtitle]: "Hayatı her zaman, her yerde paylaş",
	[Key.diaryCount]: "günlük girişleri",
	[Key.diaryReply]: "Yanıtla",
	[Key.diaryTips]: "Yalnızca son 30 günlük girişini göster",
	[Key.diaryMinutesAgo]: "dakikalar önce",
	[Key.diaryHoursAgo]: "saatler önce",
	[Key.diaryDaysAgo]: "günler önce",

	// 404 Sayfası
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Sayfa Bulunamadı",
	[Key.notFoundDescription]:
		"Üzgünüz, ziyaret ettiğiniz sayfa mevcut değil veya taşınmış.",
	[Key.backToHome]: "Ana Sayfaya Dön",

	// Müzik Çalar
	[Key.musicPlayer]: "Müzik Çalar",
	[Key.musicPlayerShow]: "Müzik Çalar'ı Göster",
	[Key.musicPlayerHide]: "Müzik Çalar'ı Gizle",
	[Key.musicPlayerExpand]: "Müzik Çalar'ı Genişlet",
	[Key.musicPlayerCollapse]: "Müzik Çalar'ı Daralt",
	[Key.musicPlayerPause]: "Duraklat",
	[Key.musicPlayerPlay]: "Çal",
	[Key.musicPlayerPrevious]: "Önceki",
	[Key.musicPlayerNext]: "Sonraki",
	[Key.musicPlayerShuffle]: "Karıştır",
	[Key.musicPlayerRepeat]: "Tümünü Tekrarla",
	[Key.musicPlayerRepeatOne]: "Birini Tekrarla",
	[Key.musicPlayerVolume]: "Ses Seviyesi",
	[Key.musicPlayerProgress]: "Çalma İlerlemesi",
	[Key.musicPlayerCover]: "Kapak",
	[Key.musicPlayerPlaylist]: "Çalma Listesi",
	[Key.musicPlayerLoading]: "Yükleniyor...",
	[Key.musicPlayerErrorPlaylist]: "Çalma listesi alınamadı",
	[Key.musicPlayerErrorSong]:
		"Geçerli şarkı yüklenemedi, bir sonraki deneniyor",
	[Key.musicPlayerErrorEmpty]: "Çalma listesinde kullanılabilir şarkı yok",
	[Key.unknownSong]: "Bilinmeyen Şarkı",
	[Key.unknownArtist]: "Bilinmeyen Sanatçı",

	// Albümler Sayfası
	[Key.albums]: "Albümler",
	[Key.albumsSubtitle]: "Hayattaki güzel anları kaydedin",
	[Key.albumsEmpty]: "İçerik yok",
	[Key.albumsEmptyDesc]:
		"Henüz albüm oluşturulmadı. Hadi güzel anılar ekleyin!",
	[Key.albumsBackToList]: "Albümlere Dön",

	// Cihazlar Sayfası
	[Key.devices]: "Cihazlarım",
	[Key.devicesSubtitle]: "Günlük hayatımda kullandığım cihazlar",
	[Key.devicesViewDetails]: "Xem chi tiết",
	[Key.albumsPhotoCount]: "fotoğraf",
	[Key.albumsPhotosCount]: "fotoğraflar",

	// Projeler Sayfası
	[Key.projects]: "Projeler",
	[Key.projectsSubtitle]: "Geliştirme projesi portföyüm",
	[Key.projectsAll]: "Tümü",
	[Key.projectsWeb]: "Web Uygulamaları",
	[Key.projectsMobile]: "Mobil Uygulamalar",
	[Key.projectsDesktop]: "Masaüstü Uygulamaları",
	[Key.projectsOther]: "Diğer",
	[Key.projectTechStack]: "Teknoloji Yığını",
	[Key.projectLiveDemo]: "Canlı Demo",
	[Key.projectSourceCode]: "Kaynak Kodu",
	[Key.projectDescription]: "Proje Açıklaması",
	[Key.projectStatus]: "Durum",
	[Key.projectStatusCompleted]: "Tamamlandı",
	[Key.projectStatusInProgress]: "Devam Ediyor",
	[Key.projectStatusPlanned]: "Planlandı",
	[Key.projectsTotal]: "Toplam Proje",
	[Key.projectsCompleted]: "Tamamlandı",
	[Key.projectsInProgress]: "Devam Ediyor",
	[Key.projectsTechStack]: "Teknoloji Yığını İstatistikleri",
	[Key.projectsFeatured]: "Öne Çıkan Projeler",
	[Key.projectsPlanned]: "Planlandı",
	[Key.projectsDemo]: "Canlı Demo",
	[Key.projectsSource]: "Kaynak Kodu",
	[Key.projectsVisit]: "Projeyi Ziyaret Et",
	[Key.projectsGitHub]: "GitHub",

	// RSS Sayfası
	[Key.rss]: "RSS Akışı",
	[Key.rssDescription]: "En son güncellemeleri almak için abone olun",
	[Key.rssSubtitle]:
		"En son makaleleri ve güncellemeleri anında almak için RSS ile abone olun",
	[Key.rssLink]: "RSS Bağlantısı",
	[Key.rssCopyToReader]: "RSS okuyucunuza bağlantıyı kopyalayın",
	[Key.rssCopyLink]: "Kopyala",
	[Key.rssLatestPosts]: "En Son Gönderiler",
	[Key.rssWhatIsRSS]: "RSS Nedir?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Gerçekten Basit Yayıncılık), sık güncellenen içerikleri yayınlamak için standart bir formattır. RSS ile şunları yapabilirsiniz:",
	[Key.rssBenefit1]:
		"Manuel olarak ziyaret etmeden en son web sitesi içeriğine zamanında ulaşın",
	[Key.rssBenefit2]:
		"Birden fazla web sitesine abonelikleri tek bir yerden yönetin",
	[Key.rssBenefit3]: "Önemli güncellemeleri ve makaleleri kaçırmayın",
	[Key.rssBenefit4]: "Reklamsız ve temiz bir okuma deneyiminin keyfini çıkarın",
	[Key.rssHowToUse]:
		"Bu siteye abone olmak için Feedly, Inoreader veya diğer RSS okuyucularını kullanmanız önerilir.",
	[Key.rssCopied]: "RSS bağlantısı panoya kopyalandı!",
	[Key.rssCopyFailed]:
		"Kopyalama başarısız oldu, lütfen bağlantıyı manuel olarak kopyalayın",

	// Atom Sayfası
	[Key.atom]: "Atom Feed",
	[Key.atomDescription]: "En son güncellemeleri almak için abone olun",
	[Key.atomSubtitle]:
		"En son makaleleri ve güncellemeleri anında almak için Atom üzerinden abone olun",
	[Key.atomLink]: "Atom Bağlantısı",
	[Key.atomCopyToReader]: "Bağlantıyı Atom okuyucunuza kopyalayın",
	[Key.atomCopyLink]: "Kopyala",
	[Key.atomLatestPosts]: "En Son Gönderiler",
	[Key.atomWhatIsAtom]: "Atom Nedir?",
	[Key.atomWhatIsAtomDescription]:
		"Atom (Atom Sendikasyon Biçimi), feed'leri ve öğelerini tanımlamak için XML tabanlı bir standarttır. Atom ile şunları yapabilirsiniz:",
	[Key.atomBenefit1]:
		"Manuel olarak herhangi bir değişiklik yapmadan en son web sitesi içeriğini zamanında alın ziyaret ediliyor",
	[Key.atomBenefit2]:
		"Birden fazla web sitesine abonelikleri tek bir yerden yönetin",
	[Key.atomBenefit3]: "Önemli güncellemeleri ve makaleleri kaçırmayın",
	[Key.atomBenefit4]:
		"Reklamsız ve temiz bir okuma deneyiminin keyfini çıkarın",
	[Key.atomHowToUse]:
		"Bu siteye abone olmak için Feedly, Inoreader veya diğer Atom okuyucularını kullanmanız önerilir.",
	[Key.atomCopied]: "Atom bağlantısı panoya kopyalandı!",
	[Key.atomCopyFailed]:
		"Kopyalama başarısız, lütfen bağlantıyı manuel olarak kopyalayın",

	// Duvar kağıdı modu
	[Key.wallpaperBanner]: "Afiş Modu",
	[Key.wallpaperFullscreen]: "Tam Ekran Modu",
	[Key.wallpaperNone]: "Duvar Kağıdını Gizle",

	// Beceriler Sayfası
	[Key.skills]: "Beceriler",
	[Key.skillsSubtitle]: "Teknik becerilerim ve uzmanlığım",
	[Key.skillsFrontend]: "Ön Uç Geliştirme",
	[Key.skillsBackend]: "Arka Uç Geliştirme",
	[Key.skillsDatabase]: "Veritabanı",
	[Key.skillsTools]: "Geliştirme Araçları",
	[Key.skillsOther]: "Diğer Beceriler",
	[Key.skillLevel]: "Yeterlilik",
	[Key.skillLevelBeginner]: "Başlangıç",
	[Key.skillLevelIntermediate]: "Orta",
	[Key.skillLevelAdvanced]: "İleri",
	[Key.skillLevelExpert]: "Uzman",
	[Key.skillExperience]: "Deneyim",
	[Key.skillYears]: "yıl",
	[Key.skillMonths]: "ay",
	[Key.skillsTotal]: "Toplam Beceriler",
	[Key.skillsExpert]: "Uzman Seviyesi",
	[Key.skillsAdvanced]: "İleri",
	[Key.skillsIntermediate]: "Orta",
	[Key.skillsBeginner]: "Başlangıç",
	[Key.skillsAdvancedTitle]: "Profesyonel Beceriler",
	[Key.skillsProjects]: "İlgili Projeler",
	[Key.skillsDistribution]: "Beceri Dağılımı",
	[Key.skillsByLevel]: "Seviyeye Göre",
	[Key.skillsByCategory]: "Bana Göre Kategori",
	[Key.noData]: "Veri yok",

	// Zaman Çizelgesi Sayfası
	[Key.timeline]: "Zaman Çizelgesi",
	[Key.timelineSubtitle]: "Büyüme yolculuğum ve önemli dönüm noktaları",
	[Key.timelineEducation]: "Eğitim",
	[Key.timelineWork]: "İş Deneyimi",
	[Key.timelineProject]: "Proje Deneyimi",
	[Key.timelineAchievement]: "Başarılar",
	[Key.timelinePresent]: "Mevcut",
	[Key.timelineLocation]: "Konum",
	[Key.timelineDescription]: "Ayrıntılı Açıklama",
	[Key.timelineMonths]: "aylar",
	[Key.timelineYears]: "yıllar",
	[Key.timelineTotal]: "Toplam",
	[Key.timelineProjects]: "Projeler",
	[Key.timelineExperience]: "İş Deneyimi",
	[Key.timelineCurrent]: "Mevcut Durum",
	[Key.timelineHistory]: "Geçmiş",
	[Key.timelineAchievements]: "Başarılar",
	[Key.timelineStartDate]: "Başlangıç ​​Tarihi",
	[Key.timelineDuration]: "Süre",

	// Geri Bildirim Sayfası - Web Sitesi Yöneticisiyle İletişime Geçme Modülü
	[Key.contactMe]: "Web Sitesi Yöneticisiyle İletişime Geçin",
	[Key.contactEmail]:
		"Web Sitesi Yöneticisiyle e-posta yoluyla iletişime geçin",
	[Key.contactSocialFriends]:
		"Web Sitesi Yöneticisiyle sosyal medya arkadaşı olarak ekleyerek iletişime geçin",
	[Key.addFriends]: "Şimdi bir arkadaş ekleyin",

	// Sponsorluk Sayfası
	[Key.sponsorsNotice1]:
		"Web sitesi içeriğini faydalı buluyorsanız, daha iyi içerik oluşturmama yardımcı olmak için lütfen aşağıdaki yöntemlerle çalışmalarımı destekleyin. Tüm sponsorluklar web sitesi bakımı, sunucu maliyetleri ve içerik oluşturma için kullanılacaktır.",
	[Key.sponsorsNotice2]:
		"Zuoyanblogs blog projesinin içerik geliştirme çalışmalarını desteklediğiniz için teşekkür ederiz!",
	[Key.wechatPay]: "WeChat",
	[Key.aliPay]: "Alipay",
	[Key.scanPayQRcode]: "Ödeme için Tarayın",
	[Key.sponsorsPartner]: "Sponsor Ortağı",
	[Key.otherSupportOptions]: "Diğer destek yöntemleri",
	[Key.shareBlog]: "Blogumu daha fazla arkadaşınızla paylaşın",
	[Key.leaveComment]:
		"Makalenin altındaki yorumlar bölümüne düşüncelerinizi bırakın",
	[Key.subscribeToArticles]:
		"En son makaleleri almak için RSS ve Atom'a abone olun",

	// Şifre Koruması
	[Key.passwordProtected]: "Şifre Korumalı",
	[Key.passwordProtectedTitle]: "Bu içerik şifre korumalıdır",
	[Key.passwordProtectedDescription]:
		"Korumalı içeriği görüntülemek için lütfen şifreyi girin",
	[Key.passwordPlaceholder]: "Şifreyi girin",
	[Key.passwordUnlock]: "Kilidi Aç",
	[Key.passwordUnlocking]: "Kilit Açılıyor...",
	[Key.passwordIncorrect]: "Şifre yanlış, Lütfen tekrar deneyin",
	[Key.passwordDecryptError]:
		"Şifre çözme başarısız oldu, lütfen şifrenin doğru olup olmadığını kontrol edin",
	[Key.passwordRequired]: "Lütfen şifreyi girin",
	[Key.passwordVerifying]: "Doğrulanıyor...",
	[Key.passwordDecryptFailed]:
		"Şifre çözme başarısız oldu, lütfen şifreyi kontrol edin",
	[Key.passwordDecryptRetry]:
		"Şifre çözme başarısız oldu, lütfen tekrar deneyin",
	[Key.passwordUnlockButton]: "Kilidi aç",
	[Key.copyFailed]: "Kopyalama başarısız oldu:",
	[Key.syntaxHighlightFailed]: "Sözdizimi vurgulama başarısız oldu:",
	[Key.autoSyntaxHighlightFailed]:
		"Otomatik sözdizimi vurgulama da başarısız oldu:",
	[Key.decryptionError]: "Şifre çözme sırasında bir hata oluştu:",

	// Son Değiştirilen Zaman Kartı
	[Key.lastModifiedPrefix]: "Son düzenlemeden bu yana geçen süre: ",
	[Key.lastModifiedOutdated]: "Bazı bilgiler güncelliğini yitirmiş olabilir",
	[Key.year]: "y",
	[Key.month]: "m",
	[Key.day]: "g",
	[Key.hour]: "s",
	[Key.minute]: "dk",
	[Key.second]: "sn",

	// Site İstatistikleri
	[Key.siteStats]: "Site İstatistikleri",
	[Key.siteStatsPostCount]: "Gönderiler",
	[Key.siteStatsCategoryCount]: "Kategoriler",
	[Key.siteStatsTagCount]: "Etiketler",
	[Key.siteStatsTotalWords]: "Toplam Kelime",
	[Key.siteStatsRunningDays]: "Çalışma Süresi",
	[Key.siteStatsLastUpdate]: "Son Etkinlik",
	[Key.siteStatsDaysAgo]: "{days} gün önce",
	[Key.siteStatsDays]: "{days} gün",

	// Takvim Bileşeni
	[Key.calendarSunday]: "Paz",
	[Key.calendarMonday]: "Pzt",
	[Key.calendarTuesday]: "Salı",
	[Key.calendarWednesday]: "Çarşamba",
	[Key.calendarThursday]: "Perşembe",
	[Key.calendarFriday]: "Cuma",
	[Key.calendarSaturday]: "Cmt",
	[Key.calendarJanuary]: "Ocak",
	[Key.calendarFebruary]: "Şubat",
	[Key.calendarMarch]: "Mar",
	[Key.calendarApril]: "Nis",
	[Key.calendarMay]: "Mayıs",
	[Key.calendarJune]: "Haziran",
	[Key.calendarJuly]: "Tem",
	[Key.calendarAugust]: "Ağustos",
	[Key.calendarSeptember]: "Eyl",
	[Key.calendarOctober]: "Ekim",
	[Key.calendarNovember]: "Kas",
	[Key.calendarDecember]: "Ara",

	// Paylaşım İşlevleri
	[Key.shareArticle]: "Paylaş",
	[Key.generatingPoster]: "Poster oluşturuluyor...",
	[Key.copied]: "Kopyalandı",
	[Key.copyLink]: "Bağlantıyı Kopyala",
	[Key.savePoster]: "Posteri Kaydet",
	[Key.scanToRead]: "Okumak için Tara",
	[Key.shareOnSocial]: "Paylaş",
	[Key.shareOnSocialDescription]:
		"Bu makale size yardımcı olduysa, lütfen başkalarıyla paylaşın!",

	// Profil İstatistikleri
	[Key.profileStatsLoading]: "İstatistikler yükleniyor...",
	[Key.profileStatsPageViews]: "Sayfa görüntülemeleri",
	[Key.profileStatsVisits]: "Ziyaretler",
	[Key.profileStatsUnavailable]: "İstatistikler mevcut değil",

	// Düzen Düğmeyi Değiştir
	[Key.switchToGridMode]: "Izgara Moduna Geç",
	[Key.switchToListMode]: "Liste Moduna Geç",

	// Harici Bağlantı Uyarısı
	[Key.leaveSite]: "Bu siteden ayrılıyorsunuz",
	[Key.goToExternalLink]: "Harici bir bağlantıyı ziyaret etmek üzeresiniz:",
	[Key.warningText]:
		"Lütfen hesabınızın ve varlıklarınızın güvenliğine dikkat edin",
	[Key.confirmText]: "Ziyarete devam edin",
	[Key.cancelText]: "İptal",
};
