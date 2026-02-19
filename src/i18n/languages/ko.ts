import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ko: Translation = {
	[Key.home]: "홈",
	[Key.about]: "정보",
	[Key.archive]: "아카이브",
	[Key.search]: "검색",
	[Key.sponsors]: "스폰서",
	[Key.feedback]: "피드백",
	[Key.other]: "기타",

	// 번역 패널 제목
	[Key.translateHeader]: "언어 선택",

	// 탐색 막대 제목
	[Key.navLinks]: "링크",
	[Key.navMy]: "내",
	[Key.navAbout]: "정보",
	[Key.navOthers]: "기타",

	[Key.tags]: "태그",
	[Key.categories]: "카테고리",
	[Key.recentPosts]: "최근 게시물",
	[Key.postList]: "게시물 목록",
	[Key.tableOfContents]: "목차",
	[Key.tocEmpty]: "목차가 없습니다",

	// 공지
	[Key.announcement]: "공지사항",
	[Key.announcementClose]: "닫기",

	[Key.comments]: "댓글",
	[Key.friends]: "친구",
	[Key.friendsSubtitle]: "더 많은 훌륭한 웹사이트를 찾아보세요",
	[Key.friendsSearchPlaceholder]: "친구 이름 또는 설명 검색...",
	[Key.friendsFilterAll]: "모두",
	[Key.friendsNoResults]: "일치하는 친구를 찾을 수 없습니다",
	[Key.friendsVisit]: "방문",
	[Key.friendsCopyLink]: "링크 복사",
	[Key.friendsCopySuccess]: "복사됨",
	[Key.friendsTags]: "태그",
	[Key.untitled]: "제목 없음",
	[Key.uncategorized]: "분류 없음",
	[Key.noTags]: "태그 없음",

	[Key.wordCount]: "단어",
	[Key.wordsCount]: "단어",
	[Key.minuteCount]: "분",
	[Key.minutesCount]: "분",
	[Key.postCount]: "게시물",
	[Key.postsCount]: "게시물",

	[Key.themeColor]: "테마 색상",

	[Key.lightMode]: "밝게",
	[Key.darkMode]: "어둡게",
	[Key.systemMode]: "시스템",

	[Key.more]: "더 보기",

	[Key.author]: "작성자",
	[Key.publishedAt]: "게시 위치",
	[Key.license]: "라이선스",
	[Key.anime]: "애니메이션",
	[Key.diary]: "일기",

	// 애니메이션 페이지
	[Key.animeTitle]: "내 애니메이션 목록",
	[Key.animeSubtitle]: "애니메이션 여정 녹화",
	[Key.animeStatusWatching]: "시청 중",
	[Key.animeStatusCompleted]: "완료",
	[Key.animeStatusPlanned]: "계획됨",
	[Key.animeStatusOnHold]: "보류 중",
	[Key.animeStatusDropped]: "중단됨",
	[Key.animeFilterAll]: "모두",
	[Key.animeYear]: "년도",
	[Key.animeStudio]: "스튜디오",
	[Key.animeEmpty]: "애니메이션 데이터 없음",
	[Key.animeEmptyBangumi]: "방구미 설정 또는 네트워크 연결을 확인하세요",
	[Key.animeEmptyLocal]:
		"src/data/anime.ts 파일에 애니메이션 정보를 추가하세요",

	// 다이어리 페이지
	[Key.diarySubtitle]: "언제 어디서나 삶을 공유하세요",
	[Key.diaryCount]: "일기 항목",
	[Key.diaryReply]: "답글",
	[Key.diaryTips]: "최근 30개의 일기 항목만 표시",
	[Key.diaryMinutesAgo]: "분 전",
	[Key.diaryHoursAgo]: "시간 전",
	[Key.diaryDaysAgo]: "일 전",

	// 404 페이지
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "페이지를 찾을 수 없습니다",
	[Key.notFoundDescription]:
		"죄송합니다. 방문하신 페이지가 존재하지 않거나 이동되었습니다.",
	[Key.backToHome]: "홈으로 돌아가기",

	// 음악 플레이어
	[Key.musicPlayer]: "음악 플레이어",
	[Key.musicPlayerShow]: "음악 플레이어 표시",
	[Key.musicPlayerHide]: "음악 플레이어 숨기기",
	[Key.musicPlayerExpand]: "음악 플레이어 펼치기",
	[Key.musicPlayerCollapse]: "음악 플레이어 접기",
	[Key.musicPlayerPause]: "일시 정지",
	[Key.musicPlayerPlay]: "재생",
	[Key.musicPlayerPrevious]: "이전 곡",
	[Key.musicPlayerNext]: "다음 곡",
	[Key.musicPlayerShuffle]: "랜덤 재생",
	[Key.musicPlayerRepeat]: "전체 반복",
	[Key.musicPlayerRepeatOne]: "한 곡 반복",
	[Key.musicPlayerVolume]: "볼륨 조절",
	[Key.musicPlayerProgress]: "재생 진행 중",
	[Key.musicPlayerCover]: "표지",
	[Key.musicPlayerPlaylist]: "재생 목록",
	[Key.musicPlayerLoading]: "로딩 중...",
	[Key.musicPlayerErrorPlaylist]: "재생 목록을 가져오는 데 실패했습니다.",
	[Key.musicPlayerErrorSong]:
		"현재 곡을 불러오는 데 실패했습니다. 다음 곡을 시도합니다.",
	[Key.musicPlayerErrorEmpty]: "재생 목록에 사용할 수 있는 곡이 없습니다.",
	[Key.unknownSong]: "알 수 없는 곡",
	[Key.unknownArtist]: "알 수 없는 아티스트",

	// 앨범 페이지
	[Key.albums]: "앨범",
	[Key.albumsSubtitle]: "인생의 아름다운 순간을 기록하세요",
	[Key.albumsEmpty]: "내용 없음",
	[Key.albumsEmptyDesc]:
		"아직 앨범이 생성되지 않았습니다. 아름다운 추억을 더하세요!",
	[Key.albumsBackToList]: "앨범으로 돌아가기",

	// 기기 페이지
	[Key.devices]: "내 기기",
	[Key.devicesSubtitle]: "일상 생활에서 사용하는 기기입니다",
	[Key.devicesViewDetails]: "세부 정보 보기",
	[Key.albumsPhotoCount]: "사진",
	[Key.albumsPhotosCount]: "사진",

	// 프로젝트 페이지
	[Key.projects]: "프로젝트",
	[Key.projectsSubtitle]: "내 개발 프로젝트 포트폴리오",
	[Key.projectsAll]: "모두",
	[Key.projectsWeb]: "웹 애플리케이션",
	[Key.projectsMobile]: "모바일 애플리케이션",
	[Key.projectsDesktop]: "데스크톱 애플리케이션",
	[Key.projectsOther]: "기타",
	[Key.projectTechStack]: "기술 스택",
	[Key.projectLiveDemo]: "라이브 데모",
	[Key.projectSourceCode]: "소스 코드",
	[Key.projectDescription]: "프로젝트 설명",
	[Key.projectStatus]: "상태",
	[Key.projectStatusCompleted]: "완료됨",
	[Key.projectStatusInProgress]: "진행 중",
	[Key.projectStatusPlanned]: "계획됨",
	[Key.projectsTotal]: "총 프로젝트",
	[Key.projectsCompleted]: "완료됨",
	[Key.projectsInProgress]: "진행 중",
	[Key.projectsTechStack]: "기술 스택 통계",
	[Key.projectsFeatured]: "추천 프로젝트",
	[Key.projectsPlanned]: "계획됨",
	[Key.projectsDemo]: "라이브 데모",
	[Key.projectsSource]: "소스 코드",
	[Key.projectsVisit]: "프로젝트 방문",
	[Key.projectsGitHub]: "GitHub",

	// RSS 페이지
	[Key.rss]: "RSS 피드",
	[Key.rssDescription]: "최신 업데이트를 구독하세요",
	[Key.rssSubtitle]:
		"RSS를 통해 구독하면 최신 기사와 업데이트를 즉시 받아볼 수 있습니다",
	[Key.rssLink]: "RSS 링크",
	[Key.rssCopyToReader]: "RSS 리더에 링크 복사",
	[Key.rssCopyLink]: "복사",
	[Key.rssLatestPosts]: "최신 게시물",
	[Key.rssWhatIsRSS]: "RSS란 무엇인가요?",
	[Key.rssWhatIsRSSDescription]:
		"RSS(Really Simple Syndication)는 자주 업데이트되는 콘텐츠를 게시하는 표준 형식입니다. RSS를 사용하면 다음과 같은 작업을 수행할 수 있습니다.",
	[Key.rssBenefit1]:
		"직접 방문하지 않고도 최신 웹사이트 콘텐츠를 제때 받아보세요",
	[Key.rssBenefit2]: "여러 웹사이트 구독을 한 곳에서 관리하세요",
	[Key.rssBenefit3]: "중요한 업데이트와 기사를 놓치지 마세요",
	[Key.rssBenefit4]: "광고 없는 깔끔한 독서 환경을 즐기세요",
	[Key.rssHowToUse]:
		"이 사이트를 구독하려면 Feedly, Inoreader 또는 다른 RSS 리더를 사용하는 것이 좋습니다.",
	[Key.rssCopied]: "RSS 링크가 클립보드에 복사되었습니다!",
	[Key.rssCopyFailed]: "복사 실패, 링크를 직접 복사하세요",

	// Atom 페이지
	[Key.atom]: "Atom 피드",
	[Key.atomDescription]: "최신 업데이트를 받으려면 구독하세요",
	[Key.atomSubtitle]:
		"Atom을 통해 구독하면 최신 기사와 업데이트를 즉시 받으실 수 있습니다",
	[Key.atomLink]: "Atom 링크",
	[Key.atomCopyToReader]: "Atom 리더 링크 복사",
	[Key.atomCopyLink]: "복사",
	[Key.atomLatestPosts]: "최신 게시물",
	[Key.atomWhatIsAtom]: "Atom이란 무엇인가요?",
	[Key.atomWhatIsAtomDescription]:
		"Atom(Atom Syndication Format)은 피드와 해당 항목을 설명하는 XML 기반 표준입니다. Atom을 사용하면 다음과 같은 작업을 수행할 수 있습니다.",
	[Key.atomBenefit1]:
		"직접 방문하지 않고도 최신 웹사이트 콘텐츠를 제때 받아보세요.",
	[Key.atomBenefit2]: "한곳에서 여러 웹사이트 구독 관리",
	[Key.atomBenefit3]: "중요한 업데이트와 기사를 놓치지 마세요.",
	[Key.atomBenefit4]: "광고 없는 깔끔한 독서 환경을 즐기세요.",
	[Key.atomHowToUse]:
		"사용하는 것이 좋습니다 Feedly, Inoreader 또는 다른 Atom 리더를 사용하여 이 사이트를 구독하세요.",
	[Key.atomCopied]: "Atom 링크가 클립보드에 복사되었습니다!",
	[Key.atomCopyFailed]: "복사 실패, 링크를 직접 복사하세요.",

	// 배경화면 모드
	[Key.wallpaperBanner]: "배너 모드",
	[Key.wallpaperFullscreen]: "전체 화면 모드",
	[Key.wallpaperNone]: "배경화면 숨기기",

	// 기술 페이지
	[Key.skills]: "기술",
	[Key.skillsSubtitle]: "기술 및 전문 지식",
	[Key.skillsFrontend]: "프런트엔드 개발",
	[Key.skillsBackend]: "백엔드 개발",
	[Key.skillsDatabase]: "데이터베이스",
	[Key.skillsTools]: "개발 도구",
	[Key.skillsOther]: "기타 기술",
	[Key.skillLevel]: "숙련도",
	[Key.skillLevelBeginner]: "초보자",
	[Key.skillLevelIntermediate]: "중급",
	[Key.skillLevelAdvanced]: "고급",
	[Key.skillLevelExpert]: "전문가",
	[Key.skillExperience]: "경험",
	[Key.skillYears]: "년",
	[Key.skillMonths]: "개월",
	[Key.skillsTotal]: "총 기술",
	[Key.skillsExpert]: "전문가 수준",
	[Key.skillsAdvanced]: "고급",
	[Key.skillsIntermediate]: "중급",
	[Key.skillsBeginner]: "초보자",
	[Key.skillsAdvancedTitle]: "전문 기술",
	[Key.skillsProjects]: "관련 프로젝트",
	[Key.skillsDistribution]: "기술 분포",
	[Key.skillsByLevel]: "레벨별",
	[Key.skillsByCategory]: "범주별",
	[Key.noData]: "데이터 없음",

	// 타임라인 페이지
	[Key.timeline]: "타임라인",
	[Key.timelineSubtitle]: "나의 성장 여정과 중요한 이정표",
	[Key.timelineEducation]: "교육",
	[Key.timelineWork]: "직무 경험",
	[Key.timelineProject]: "프로젝트 경험",
	[Key.timelineAchievement]: "성과",
	[Key.timelinePresent]: "현재",
	[Key.timelineLocation]: "위치",
	[Key.timelineDescription]: "상세 설명",
	[Key.timelineMonths]: "개월",
	[Key.timelineYears]: "년",
	[Key.timelineTotal]: "총계",
	[Key.timelineProjects]: "프로젝트",
	[Key.timelineExperience]: "직무 경험",
	[Key.timelineCurrent]: "현재 상태",
	[Key.timelineHistory]: "기록",
	[Key.timelineAchievements]: "업적",
	[Key.timelineStartDate]: "시작일",
	[Key.timelineDuration]: "기간",

	// 피드백 페이지 - 웹사이트 관리자에게 문의하기 모듈
	[Key.contactMe]: "웹사이트 관리자에게 문의하기",
	[Key.contactEmail]: "이메일로 웹사이트 관리자에게 문의하기",
	[Key.contactSocialFriends]:
		"소셜 미디어 친구로 추가하여 웹사이트 관리자에게 문의하기",
	[Key.addFriends]: "지금 친구 추가하기",

	// 후원 페이지
	[Key.sponsorsNotice1]:
		"웹사이트 콘텐츠가 유용하다고 생각되시면, 더 나은 콘텐츠 제작을 위해 아래 방법으로 후원해 주세요. 모든 후원금은 웹사이트 유지 관리, 서버 비용 및 콘텐츠 제작에 사용됩니다.",
	[Key.sponsorsNotice2]:
		"Zuoyanblogs 블로그 프로젝트 콘텐츠 개발을 후원해 주셔서 감사합니다!",
	[Key.wechatPay]: "WeChat",
	[Key.aliPay]: "Alipay",
	[Key.scanPayQRcode]: "스캔하여 결제",
	[Key.sponsorsPartner]: "후원 파트너",
	[Key.otherSupportOptions]: "기타 지원 방법",
	[Key.shareBlog]: "내 블로그를 더 많은 친구와 공유하기",
	[Key.leaveComment]: "글 아래 댓글란에 의견을 남겨주세요",
	[Key.subscribeToArticles]: "RSS 및 Atom을 구독하여 최신 글을 받아보세요",

	// 비밀번호 보호
	[Key.passwordProtected]: "비밀번호로 보호됨",
	[Key.passwordProtectedTitle]: "이 콘텐츠는 비밀번호로 보호되어 있습니다.",
	[Key.passwordProtectedDescription]:
		"보호된 콘텐츠를 보려면 비밀번호를 입력하세요.",
	[Key.passwordPlaceholder]: "비밀번호 입력",
	[Key.passwordUnlock]: "잠금 해제",
	[Key.passwordUnlocking]: "잠금 해제 중...",
	[Key.passwordIncorrect]: "비밀번호가 올바르지 않습니다. 다시 시도하세요.",
	[Key.passwordDecryptError]: "복호화에 실패했습니다. 비밀번호가 정확합니다.",
	[Key.passwordRequired]: "비밀번호를 입력하세요.",
	[Key.passwordVerifying]: "확인 중...",
	[Key.passwordDecryptFailed]: "복호화에 실패했습니다. 비밀번호를 확인하세요.",
	[Key.passwordDecryptRetry]: "복호화에 실패했습니다. 다시 시도하세요.",
	[Key.passwordUnlockButton]: "잠금 해제",
	[Key.copyFailed]: "복사 실패:",
	[Key.syntaxHighlightFailed]: "구문 강조 표시 실패:",
	[Key.autoSyntaxHighlightFailed]: "자동 구문 강조 표시도 실패했습니다:",
	[Key.decryptionError]: "복호화 중 오류 발생:",

	// 최종 수정 시간표
	[Key.lastModifiedPrefix]: "마지막 수정 이후 경과 시간: ",
	[Key.lastModifiedOutdated]: "일부 정보가 오래되었을 수 있습니다.",
	[Key.year]: "y",
	[Key.month]: "m",
	[Key.day]: "d",
	[Key.hour]: "h",
	[Key.minute]: "min",
	[Key.second]: "s",

	// 사이트 통계
	[Key.siteStats]: "사이트 통계",
	[Key.siteStatsPostCount]: "게시물",
	[Key.siteStatsCategoryCount]: "카테고리",
	[Key.siteStatsTagCount]: "태그",
	[Key.siteStatsTotalWords]: "총 단어 수",
	[Key.siteStatsRunningDays]: "실행 시간",
	[Key.siteStatsLastUpdate]: "마지막 활동",
	[Key.siteStatsDaysAgo]: "{days}일 전",
	[Key.siteStatsDays]: "{days}일",

	// 캘린더 구성 요소
	[Key.calendarSunday]: "일",
	[Key.calendarMonday]: "월",
	[Key.calendarTuesday]: "화",
	[Key.calendarWednesday]: "수",
	[Key.calendarThursday]: "목",
	[Key.calendarFriday]: "금",
	[Key.calendarSaturday]: "토",
	[Key.calendarJanuary]: "1월",
	[Key.calendarFebruary]: "2월",
	[Key.calendarMarch]: "3월",
	[Key.calendarApril]: "4월",
	[Key.calendarMay]: "5월",
	[Key.calendarJune]: "6월",
	[Key.calendarJuly]: "7월",
	[Key.calendarAugust]: "8월",
	[Key.calendarSeptember]: "9월",
	[Key.calendarOctober]: "10월",
	[Key.calendarNovember]: "11월",
	[Key.calendarDecember]: "12월",

	// 공유 기능
	[Key.shareArticle]: "공유",
	[Key.generatingPoster]: "포스터 생성 중...",
	[Key.copied]: "복사됨",
	[Key.copyLink]: "링크 복사",
	[Key.savePoster]: "포스터 저장",
	[Key.scanToRead]: "읽기 위해 스캔",
	[Key.shareOnSocial]: "공유",
	[Key.shareOnSocialDescription]:
		"이 글이 도움이 되었다면 다른 사람들과 공유해 주세요!",

	// 프로필 통계
	[Key.profileStatsLoading]: "통계 불러오는 중...",
	[Key.profileStatsPageViews]: "페이지 조회수",
	[Key.profileStatsVisits]: "방문 횟수",
	[Key.profileStatsUnavailable]: "통계를 사용할 수 없습니다",

	// 레이아웃 전환 버튼
	[Key.switchToGridMode]: "그리드 모드로 전환 모드",
	[Key.switchToListMode]: "목록 모드로 전환",

	// 외부 링크 경고
	[Key.leaveSite]: "이 사이트를 떠납니다.",
	[Key.goToExternalLink]: "외부 링크를 방문하려고 합니다.",
	[Key.warningText]: "계정 및 자산 보안에 유의하십시오.",
	[Key.confirmText]: "계속 방문하시겠습니까?",
	[Key.cancelText]: "취소",
};
