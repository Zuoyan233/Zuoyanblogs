import Key from "../i18nKey";
import type { Translation } from "../translation";

export const es: Translation = {
	[Key.home]: "Inicio",
	[Key.about]: "Acerca de",
	[Key.archive]: "Archivo",
	[Key.search]: "Buscar",
	[Key.sponsors]: "Patrocinador",
	[Key.other]: "Otros",

	// Títulos de la barra de navegación
	[Key.navLinks]: "Enlaces",
	[Key.navMy]: "Mi",
	[Key.navAbout]: "Acerca de",
	[Key.navOthers]: "Otros",

	[Key.tags]: "Etiquetas",
	[Key.categories]: "Categorías",
	[Key.recentPosts]: "Publicaciones recientes",
	[Key.postList]: "Lista de publicaciones",
	[Key.tableOfContents]: "Índice",

	// Anuncio
	[Key.announcement]: "Anuncio",
	[Key.announcementClose]: "Cerrar",

	[Key.comments]: "Comentarios",
	[Key.friends]: "Amigos",
	[Key.friendsSubtitle]: "Descubre más sitios web excelentes",
	[Key.friendsSearchPlaceholder]: "Buscar nombre o descripción de amigo...",
	[Key.friendsFilterAll]: "Todos",
	[Key.friendsNoResults]: "No se han encontrado amigos coincidentes",
	[Key.friendsVisit]: "Visitar",
	[Key.friendsCopyLink]: "Copiar enlace",
	[Key.friendsCopySuccess]: "Copiado",
	[Key.friendsTags]: "Etiquetas",
	[Key.untitled]: "Sin título",
	[Key.uncategorized]: "Sin categorizar",
	[Key.noTags]: "Sin etiquetas",

	[Key.wordCount]: "palabra",
	[Key.wordsCount]: "palabras",
	[Key.minuteCount]: "minuto",
	[Key.minutesCount]: "minutos",
	[Key.postCount]: "publicación",
	[Key.postsCount]: "publicaciones",

	[Key.themeColor]: "Color del tema",

	[Key.lightMode]: "Claro",
	[Key.darkMode]: "Oscuro",
	[Key.systemMode]: "Sistema",

	[Key.more]: "Más",

	[Key.author]: "Autor",
	[Key.publishedAt]: "Publicado el",
	[Key.license]: "Licencia",
	[Key.anime]: "Anime",
	[Key.diary]: "Diario",
	[Key.gallery]: "Galería",

	// Página de Anime
	[Key.animeTitle]: "Mi lista de anime",
	[Key.animeSubtitle]: "Registra mi viaje por el anime",
	[Key.animeStatusWatching]: "Viendo",
	[Key.animeStatusCompleted]: "Completado",
	[Key.animeStatusPlanned]: "Planeado",
	[Key.animeStatusOnHold]: "En espera",
	[Key.animeStatusDropped]: "Abandonado",
	[Key.animeFilterAll]: "Todos",
	[Key.animeYear]: "Año",
	[Key.animeStudio]: "Estudio",
	[Key.animeEmpty]: "Sin datos de anime",
	[Key.animeEmptyBangumi]:
		"Por favor, revisa la configuración de Bangumi o la conexión de red",
	[Key.animeEmptyLocal]:
		"Por favor, añade la información del anime en el archivo src/data/anime.ts",

	// Página del Diario
	[Key.diarySubtitle]: "Comparte tu vida en cualquier momento y lugar",
	[Key.diaryCount]: "Entradas del diario",
	[Key.diaryReply]: "Responder",
	[Key.diaryTips]: "Mostrar solo las últimas 30 entradas del diario",
	[Key.diaryMinutesAgo]: "Hace minutos",
	[Key.diaryHoursAgo]: "Hace horas",
	[Key.diaryDaysAgo]: "Hace días",

	// Página 404
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Página no encontrada",
	[Key.notFoundDescription]:
		"Lo sentimos, la página que intentaste visitar no existe o se ha movido.",
	[Key.backToHome]: "Volver a la página principal",

	// Reproductor de música
	[Key.playlist]: "Lista de reproducción",

	// Página de Álbumes
	[Key.albums]: "Álbumes",
	[Key.albumsSubtitle]: "Graba momentos bonitos de la vida",
	[Key.albumsEmpty]: "Sin contenido",
	[Key.albumsEmptyDesc]:
		"Aún no se han creado álbumes. ¡Añade recuerdos bonitos!",
	[Key.albumsBackToList]: "Volver a Álbumes",

	// Página de Dispositivos
	[Key.devices]: "Mis dispositivos",
	[Key.devicesSubtitle]: "Estos son los dispositivos que uso a diario",
	[Key.albumsPhotoCount]: "foto",
	[Key.albumsPhotosCount]: "fotos",

	// Página de Proyectos
	[Key.projects]: "Proyectos",
	[Key.projectsSubtitle]: "Mi portafolio de proyectos de desarrollo",
	[Key.projectsAll]: "Todos",
	[Key.projectsWeb]: "Aplicaciones web",
	[Key.projectsMobile]: "Aplicaciones móviles",
	[Key.projectsDesktop]: "Aplicaciones de escritorio",
	[Key.projectsOther]: "Otro",
	[Key.projectTechStack]: "Pila tecnológica",
	[Key.projectLiveDemo]: "Demostración en vivo",
	[Key.projectSourceCode]: "Código fuente",
	[Key.projectDescription]: "Descripción del proyecto",
	[Key.projectStatus]: "Estado",
	[Key.projectStatusCompleted]: "Completado",
	[Key.projectStatusInProgress]: "En curso",
	[Key.projectStatusPlanned]: "Planificado",
	[Key.projectsTotal]: "Total de proyectos",
	[Key.projectsCompleted]: "Completado",
	[Key.projectsInProgress]: "En curso",
	[Key.projectsTechStack]: "Pila tecnológica Estadísticas",
	[Key.projectsFeatured]: "Proyectos destacados",
	[Key.projectsPlanned]: "Planificado",
	[Key.projectsDemo]: "Demostración en vivo",
	[Key.projectsSource]: "Código fuente",
	[Key.projectsVisit]: "Visitar proyecto",
	[Key.projectsGitHub]: "GitHub",

	// Página RSS
	[Key.rss]: "Feed RSS",
	[Key.rssDescription]: "Suscríbete para recibir las últimas actualizaciones",
	[Key.rssSubtitle]:
		"Suscríbete por RSS para recibir los últimos artículos y actualizaciones al instante",
	[Key.rssLink]: "Enlace RSS",
	[Key.rssCopyToReader]: "Copiar enlace a tu lector RSS",
	[Key.rssCopyLink]: "Copiar",
	[Key.rssLatestPosts]: "Últimas publicaciones",
	[Key.rssWhatIsRSS]: "¿Qué es RSS?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Really Simple Syndication) es un formato estándar para publicar contenido actualizado con frecuencia. Con RSS, puedes:",
	[Key.rssBenefit1]:
		"Obtener el contenido más reciente del sitio web a tiempo sin necesidad de visitarlo manualmente",
	[Key.rssBenefit2]:
		"Administrar suscripciones a varios sitios web en un solo lugar",
	[Key.rssBenefit3]: "Evitar perderse actualizaciones y artículos importantes",
	[Key.rssBenefit4]:
		"Disfrutar de una experiencia de lectura limpia y sin publicidad",
	[Key.rssHowToUse]:
		"Se recomienda usar Feedly, Inoreader u otros lectores RSS para suscribirse a este sitio.",
	[Key.rssCopied]: "¡Enlace RSS copiado al portapapeles!",
	[Key.rssCopyFailed]: "Error al copiar, copie el enlace manualmente",

	// Página de Atom
	[Key.atom]: "Feed de Atom",
	[Key.atomDescription]: "Suscríbete para recibir las últimas actualizaciones",
	[Key.atomSubtitle]:
		"Suscríbete a través de Atom para recibir los últimos artículos y actualizaciones al instante",
	[Key.atomLink]: "Enlace de Atom",
	[Key.atomCopyToReader]: "Copiar enlace a tu lector de Atom",
	[Key.atomCopyLink]: "Copiar",
	[Key.atomLatestPosts]: "Últimas publicaciones",
	[Key.atomWhatIsAtom]: "¿Qué es Atom?",
	[Key.atomWhatIsAtomDescription]:
		"Atom (formato de sindicación de Atom) es un estándar basado en XML para describir feeds y sus elementos. Con Atom, puedes:",
	[Key.atomBenefit1]:
		"Obtener el contenido más reciente del sitio web a tiempo sin necesidad de visitarlo manualmente",
	[Key.atomBenefit2]:
		"Administrar suscripciones a varios sitios web en un solo lugar",
	[Key.atomBenefit3]: "Evita perderte actualizaciones y artículos importantes",
	[Key.atomBenefit4]:
		"Disfruta de una experiencia de lectura limpia y sin publicidad",
	[Key.atomHowToUse]:
		"Se recomienda usar Feedly, Inoreader u otros lectores de Atom para suscribirse a este sitio",
	[Key.atomCopied]: "¡Enlace de Atom copiado al portapapeles!",
	[Key.atomCopyFailed]:
		"Error al copiar, por favor, copia el enlace manualmente",

	// Modo fondo de pantalla
	[Key.wallpaperBanner]: "Modo banner",
	[Key.wallpaperFullscreen]: "Modo pantalla completa",
	[Key.wallpaperNone]: "Ocultar fondo de pantalla",

	// Página de habilidades
	[Key.skills]: "Habilidades",
	[Key.skillsSubtitle]: "Mis habilidades técnicas y experiencia",
	[Key.skillsFrontend]: "Desarrollo frontend",
	[Key.skillsBackend]: "Backend Desarrollo",
	[Key.skillsDatabase]: "Base de datos",
	[Key.skillsTools]: "Herramientas de desarrollo",
	[Key.skillsOther]: "Otras habilidades",
	[Key.skillLevel]: "Competencia",
	[Key.skillLevelBeginner]: "Principiante",
	[Key.skillLevelIntermediate]: "Intermedio",
	[Key.skillLevelAdvanced]: "Avanzado",
	[Key.skillLevelExpert]: "Experto",
	[Key.skillExperience]: "Experiencia",
	[Key.skillYears]: "años",
	[Key.skillMonths]: "meses",
	[Key.skillsTotal]: "Total de habilidades",
	[Key.skillsExpert]: "Nivel experto",
	[Key.skillsAdvanced]: "Avanzado",
	[Key.skillsIntermediate]: "Intermedio",
	[Key.skillsBeginner]: "Principiante",
	[Key.skillsAdvancedTitle]: "Habilidades profesionales",
	[Key.skillsProjects]: "Proyectos relacionados",
	[Key.skillsDistribution]: "Distribución de habilidades",
	[Key.skillsByLevel]: "Por nivel",
	[Key.skillsByCategory]: "Por categoría",
	[Key.noData]: "Sin datos",

	// Página de la Cronología
	[Key.timeline]: "Cronología",
	[Key.timelineSubtitle]: "Mi trayectoria de crecimiento y logros importantes",
	[Key.timelineEducation]: "Educación",
	[Key.timelineWork]: "Experiencia laboral",
	[Key.timelineProject]: "Experiencia en proyectos",
	[Key.timelineAchievement]: "Logros",
	[Key.timelinePresent]: "Presente",
	[Key.timelineLocation]: "Ubicación",
	[Key.timelineDescription]: "Descripción detallada",
	[Key.timelineMonths]: "meses",
	[Key.timelineYears]: "años",
	[Key.timelineTotal]: "Total",
	[Key.timelineProjects]: "Proyectos",
	[Key.timelineExperience]: "Experiencia laboral",
	[Key.timelineCurrent]: "Estado actual",
	[Key.timelineHistory]: "Historial",
	[Key.timelineAchievements]: "Logros",
	[Key.timelineStartDate]: "Fecha de inicio",
	[Key.timelineDuration]: "Duración",

	// Protección con contraseña
	[Key.passwordProtected]: "Protegido con contraseña",
	[Key.passwordProtectedTitle]: "Este contenido está protegido con contraseña",
	[Key.passwordProtectedDescription]:
		"Introduce la contraseña para ver el contenido protegido",
	[Key.passwordPlaceholder]: "Introduce la contraseña",
	[Key.passwordUnlock]: "Desbloquear",
	[Key.passwordUnlocking]: "Desbloqueando...",
	[Key.passwordIncorrect]: "Contraseña incorrecta, inténtalo de nuevo",
	[Key.passwordDecryptError]:
		"Error de descifrado, comprueba si la contraseña es correcta",
	[Key.passwordRequired]: "Introduce la contraseña",
	[Key.passwordVerifying]: "Verificando...",
	[Key.passwordDecryptFailed]:
		"Error en el descifrado, por favor, revise la contraseña",
	[Key.passwordDecryptRetry]:
		"Error en el descifrado, por favor, inténtelo de nuevo",
	[Key.passwordUnlockButton]: "Desbloquear",
	[Key.copyFailed]: "Error en la copia:",
	[Key.syntaxHighlightFailed]: "Error en el resaltado de sintaxis:",
	[Key.autoSyntaxHighlightFailed]:
		"El resaltado de sintaxis automático también falló:",
	[Key.decryptionError]: "Error durante el descifrado:",

	// Tarjeta de última modificación
	[Key.lastModifiedPrefix]: "Tiempo desde la última edición:",
	[Key.lastModifiedOutdated]: "Alguna información puede estar desactualizada",
	[Key.year]: "y",
	[Key.month]: "m",
	[Key.day]: "d",
	[Key.hour]: "h",
	[Key.minute]: "min",
	[Key.second]: "s",

	// Estadísticas del sitio
	[Key.siteStats]: "Estadísticas del sitio",
	[Key.siteStatsPostCount]: "Publicaciones",
	[Key.siteStatsCategoryCount]: "Categorías",
	[Key.siteStatsTagCount]: "Etiquetas",
	[Key.siteStatsTotalWords]: "Total de palabras",
	[Key.siteStatsRunningDays]: "Tiempo de ejecución",
	[Key.siteStatsLastUpdate]: "Última actividad",
	[Key.siteStatsDaysAgo]: "{days} días atrás",
	[Key.siteStatsDays]: "{days} días",

	// Componente Calendario
	[Key.calendarSunday]: "Dom",
	[Key.calendarMonday]: "Lun",
	[Key.calendarTuesday]: "Mar",
	[Key.calendarWednesday]: "Mié",
	[Key.calendarThursday]: "Jue",
	[Key.calendarFriday]: "Vie",
	[Key.calendarSaturday]: "Sáb",
	[Key.calendarJanuary]: "Ene",
	[Key.calendarFebruary]: "Feb",
	[Key.calendarMarch]: "Mar",
	[Key.calendarApril]: "Abr",
	[Key.calendarMay]: "May",
	[Key.calendarJune]: "Jun",
	[Key.calendarJuly]: "Jul",
	[Key.calendarAugust]: "Ago",
	[Key.calendarSeptember]: "Sep",
	[Key.calendarOctober]: "Oct",
	[Key.calendarNovember]: "Nov",
	[Key.calendarDecember]: "Dic",
};
