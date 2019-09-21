/*-----------------------------------------------------------------------------
>>> APPEARANCE
-------------------------------------------------------------------------------
1.0 Header
	1.1 Position
	1.2 Logo
2.0 Player
	2.1 Annotations
	2.2 Cards
	2.3 Size
	2.4 Color
	2.5 Transparent background
	2.6 Endscreen
	2.7 Sroll for details
3.0 Details
	3.1 Style
	3.2 Views count
	3.3 Likes
4.0 Description
5.0 Comments
6.0 Sidebar
	6.1 Live chat
	6.2 Playlist
	6.3 Related videos
7.0 Footer
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
1.0 Header
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
1.1 Position
-----------------------------------------------------------------------------*/

html[it-header-position=hidden] #masthead-container,
html[it-header-position=hidden] app-drawer#guide #guide-spacer,
html[it-header-position=hidden] ytd-app > ytd-masthead,
html[it-header-position=hidden] #masthead-positioner,
html[it-header-position=hidden] #masthead-positioner-height-offset,
html[it-header-position=hover] app-drawer#guide #guide-spacer,
html[it-header-position=hover] #masthead-positioner-height-offset,
html[it-header-position=static] app-drawer#guide #guide-spacer,
html[it-header-position=hidden_on_video_page][it-page-type=video] #masthead-container,
html[it-header-position=hidden_on_video_page][it-page-type=video] app-drawer#guide #guide-spacer,
html[it-header-position=hidden_on_video_page][it-page-type=video] #masthead-positioner,
html[it-header-position=hidden_on_video_page][it-page-type=video] #masthead-positioner-height-offset,
html[it-header-position=hover_on_video_page][it-page-type=video] app-drawer#guide #guide-spacer,
html[it-header-position=hover_on_video_page][it-page-type=video] #masthead-positioner-height-offset
{
    display: none !important;
}

html[it-header-position=hover] ytd-app > ytd-masthead,
html[it-header-position=hover_on_video_page][it-page-type='video'] ytd-app > ytd-masthead,
html[it-header-position=hover] #masthead-container,
html[it-header-position=hover_on_video_page][it-page-type='video'] #masthead-container,
html[it-header-position=hover] #masthead-positioner,
html[it-header-position=hover_on_video_page][it-page-type='video'] #masthead-positioner
{
    z-index: 2147483647 !important;
}

html[it-header-position=hidden] ytd-page-manager#page-manager,
html[it-header-position=hidden] app-header#header,
html[it-header-position=hidden_on_video_page][it-page-type='video'] ytd-page-manager#page-manager,
html[it-header-position=hidden_on_video_page][it-page-type='video'] app-header#header,
html[it-header-position=hidden] #appbar-guide-menu,
html[it-header-position=hidden_on_video_page][it-page-type='video'] #appbar-guide-menu,
html[it-header-position=hover] ytd-page-manager#page-manager,
html[it-header-position=hover] app-header#header,
html[it-header-position=hover_on_video_page][it-page-type='video'] ytd-page-manager#page-manager,
html[it-header-position=hover_on_video_page][it-page-type='video'] app-header#header,
html[it-header-position=hover] #appbar-guide-menu,
html[it-header-position=hover_on_video_page][it-page-type='video'] #appbar-guide-menu,
html[it-header-position=static] ytd-page-manager#page-manager
{
    margin-top: 0 !important;
}

html[it-header-position=hover] ytd-app > ytd-masthead,
html[it-header-position=hover_on_video_page][it-page-type='video']:not([data-improvedtube-search=true]) ytd-app > ytd-masthead,
html[it-header-position=hover]:not([data-improvedtube-search=true]) #masthead-container,
html[it-header-position=hover_on_video_page][it-page-type='video']:not([data-improvedtube-search=true]) #masthead-container,
html[it-header-position=hover]:not([data-improvedtube-search=true]) #masthead-positioner,
html[it-header-position=hover_on_video_page][it-page-type='video']:not([data-improvedtube-search=true]) #masthead-positioner
{
    transition: transform 250ms !important;
    transform: translateY(-75%) !important;
}

html[it-header-position=hover] #masthead-container:hover,
html[it-header-position=hover_on_video_page][it-page-type='video'] #masthead-container:hover,
html[it-header-position=hover] #masthead-positioner:hover,
html[it-header-position=hover_on_video_page][it-page-type='video'] #masthead-positioner:hover
{
    transform: translateY(0%) !important;
}

html[it-header-position=static] #masthead-container
{
    position: relative !important;
}


/*-----------------------------------------------------------------------------
1.2 Logo
-----------------------------------------------------------------------------*/

html[it-header-improve-logo=true] ytd-topbar-logo-renderer#logo,
html[it-header-improve-logo=true] #yt-masthead-logo-fragment
{
    filter: grayscale(1);
}


/*-----------------------------------------------------------------------------
2.0 Player
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
2.1 Annotations
-----------------------------------------------------------------------------*/

html[it-player-annotations=false] .annotation,
html[it-player-annotations=false] .annotation-type-text,
html[it-player-annotations=false] .annotation-shape
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
2.2 Cards
-----------------------------------------------------------------------------*/

html[it-player-cards=false] .ytp-ce-element,
html[it-player-cards=false] .ytp-ce-video,
html[it-player-cards=false] .ytp-cards-button,
html[it-player-cards=false] .ytp-cards-teaser
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
2.3 Size
-----------------------------------------------------------------------------*/

/*240p*/
html[it-player-size='240p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='240p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='240p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='240p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='240p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='240p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 240px !important;
    min-height: 240px !important;
}

html[it-player-size='240p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='240p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 240px !important;
}

html[it-player-size='240p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -250px !important;
}

html[it-player-size='240p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 250px !important;

    transform: unset !important;
}

/*360p*/
html[it-player-size='360p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='360p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='360p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='360p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='360p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='360p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 360px !important;
    min-height: 360px !important;
}

html[it-player-size='360p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='360p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 360px !important;
}

html[it-player-size='360p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -370px !important;
}

html[it-player-size='360p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 370px !important;

    transform: unset !important;
}

/*480p*/
html[it-player-size='480p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='480p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='480p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='480p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='480p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='480p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 480px !important;
    min-height: 480px !important;
}

html[it-player-size='480p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='480p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 480px !important;
}

html[it-player-size='480p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -490px !important;
}

html[it-player-size='480p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 490px !important;

    transform: unset !important;
}

/*576p*/
html[it-player-size='576p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='576p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='576p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='576p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='576p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='576p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 576px !important;
    min-height: 576px !important;
}

html[it-player-size='576p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='576p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 576px !important;
}

html[it-player-size='576p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -586px !important;
}

html[it-player-size='576p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 586px !important;

    transform: unset !important;
}

/*720p*/
html[it-player-size='720p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='720p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='720p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='720p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='720p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='720p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 720px !important;
    min-height: 720px !important;
}

html[it-player-size='720p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='720p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 720px !important;
}

html[it-player-size='720p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -730px !important;
}

html[it-player-size='720p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 730px !important;

    transform: unset !important;
}

/*1080p*/
html[it-player-size='1080p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='1080p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 1080px !important;
    min-height: 1080px !important;
}

html[it-player-size='1080p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='1080p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 1080px !important;
}

html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -1090px !important;
}

html[it-player-size='1080p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 1090px !important;

    transform: unset !important;
}

/*1440p*/
html[it-player-size='1440p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='1440p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 1440px !important;
    min-height: 1440px !important;
}

html[it-player-size='1440p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='1440p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 1440px !important;
}

html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -1450px !important;
}

html[it-player-size='1440p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 1450px !important;

    transform: unset !important;
}

/*2160p*/
html[it-player-size='2160p']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='2160p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#page div#player #theater-background,
html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#content > div#placeholder-player > div
{
    height: 2160px !important;
    min-height: 2160px !important;
}

html[it-player-size='2160p']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

html[it-player-size='2160p']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: 2160px !important;
}

html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: -2170px !important;
}

html[it-player-size='2160p']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: 2170px !important;

    transform: unset !important;
}

/*Full window*/
html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video
{
    background-color: #000 !important;
}

/*Default header*/
html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    height: calc(100vh - 104px) !important;
    min-height: calc(100vh - 104px) !important;
    max-height: calc(100vh - 104px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 104px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    height: calc(100vh - 56px) !important;
    min-height: calc(100vh - 56px) !important;
    max-height: calc(100vh - 56px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: calc(100vh - 56px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video
{
    top: 0 !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    height: calc(100vh - 70px) !important;
    min-height: calc(100vh - 70px) !important;
    max-height: calc(100vh - 70px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    height: calc(100vh - 50px) !important;
    min-height: calc(100vh - 50px) !important;
    max-height: calc(100vh - 50px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 60px) !important;
}

html[it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 60px) !important;

    transform: unset !important;
}

/*Hidden header*/
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    height: calc(100vh - 48px) !important;
    min-height: calc(100vh - 48px) !important;
    max-height: calc(100vh - 48px) !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 48px) !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) body > #player.skeleton
{
    margin-top: 0 !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video
{
    top: 0 !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    height: calc(100vh - 20px) !important;
    min-height: calc(100vh - 20px) !important;
    max-height: calc(100vh - 20px) !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 10px) !important;
}

html[it-header-position^='hidden'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 10px) !important;

    transform: unset !important;
}

/*Hover header*/
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    height: calc(100vh - 48px) !important;
    min-height: calc(100vh - 48px) !important;
    max-height: calc(100vh - 48px) !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 48px) !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) body > #player.skeleton
{
    margin-top: 0 !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video
{
    top: 0 !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    height: calc(100vh - 20px) !important;
    min-height: calc(100vh - 20px) !important;
    max-height: calc(100vh - 20px) !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 10px) !important;
}

html[it-header-position^='hover'][it-player-size='full_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 10px) !important;

    transform: unset !important;
}

/*-----------------------------------------------------------------------------
>>> Fit to window
-----------------------------------------------------------------------------*/
/*Default header*/
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    max-height: calc(100vh - 104px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 104px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    max-height: calc(100vh - 56px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: calc(100vh - 56px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player video
{
    top: 0 !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    max-height: calc(100vh - 70px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    max-height: calc(100vh - 50px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 60px) !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 60px) !important;

    transform: unset !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #movie_player video
{
    position: static !important;

    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player-api
{
    display: table !important;

    margin: auto !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #movie_player
{
    display: table !important;

    width: auto !important;
    margin: auto !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player-theater-container
{
    display: table !important;

    width: auto !important;
    height: auto !important;
    min-height: unset !important;
    margin: auto !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player-theater-container > #player-container
{
    position: static !important;

    display: inline-block !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player-theater-container > #player-container > #ytd-player
{
    display: inline-block !important;

    width: auto !important;
    height: auto !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) #player-theater-container > #player-container > #ytd-player > #container
{
    display: inline-block !important;
}

/*Hidden header*/
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    max-height: calc(100vh - 48px) !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 48px) !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    max-height: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) body > #player.skeleton
{
    margin-top: 0 !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    max-height: calc(100vh - 20px) !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    max-height: 100vh !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 10px) !important;
}

html[it-header-position^='hidden'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 10px) !important;

    transform: unset !important;
}

/*Hover header*/
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy ytd-player#ytd-player video,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton #player-api,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton video
{
    max-height: calc(100vh - 48px) !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy #player-container-inner
{
    padding-top: calc(100vh - 48px) !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-theater-container,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] ytd-player#ytd-player video,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater #player-api,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) #player.skeleton.theater video
{
    max-height: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) ytd-watch-flexy[theater] #player-container-inner
{
    padding-top: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) body > #player.skeleton
{
    margin-top: 0 !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player video
{
    top: 0 !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player #player-api,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#player video,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page div#content > div#placeholder-player > div
{
    max-height: calc(100vh - 20px) !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#content > div#placeholder-player > div,
html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    max-height: 100vh !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page:not(.watch-wide) div#watch7-sidebar
{
    top: 0 !important;

    margin-top: calc(-100vh + 10px) !important;
}

html[it-header-position^='hover'][it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide #watch-appbar-playlist
{
    top: calc(100vh - 10px) !important;

    transform: unset !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player video
{
    position: relative !important;

    min-height: unset !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #player-api
{
    position: relative !important;
    left: 0 !important;

    width: auto !important;
    max-width: 100vw !important;
    height: auto !important;
    min-height: unset !important;
    margin: auto !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player #theater-background
{
    display: none !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide div#player
{
    display: table !important;

    min-width: unset !important;
}

html[it-player-size='fit_window']:not([embed]):not(:fullscreen) div#page.watch-wide #content > #placeholder-player
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
2.4 Color
-----------------------------------------------------------------------------*/

html[it-player-color='pink'] .ytp-play-progress,
html[it-player-color='pink'] .ytp-scrubber-button,
html[it-player-color='pink'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #e91e63 !important;
}

html[it-player-color='pink'] .ytp-swatch-color
{
    color: #e91e63 !important;
}

html[it-player-color='purple'] .ytp-play-progress,
html[it-player-color='purple'] .ytp-scrubber-button,
html[it-player-color='purple'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #9c27b0 !important;
}

html[it-player-color='purple'] .ytp-swatch-color
{
    color: #9c27b0 !important;
}

html[it-player-color='deep_purple'] .ytp-play-progress,
html[it-player-color='deep_purple'] .ytp-scrubber-button,
html[it-player-color='deep_purple'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #673ab7 !important;
}

html[it-player-color='deep_purple'] .ytp-swatch-color
{
    color: #673ab7 !important;
}

html[it-player-color='indigo'] .ytp-play-progress,
html[it-player-color='indigo'] .ytp-scrubber-button,
html[it-player-color='indigo'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #3f51b5 !important;
}

html[it-player-color='indigo'] .ytp-swatch-color
{
    color: #3f51b5 !important;
}

html[it-player-color='blue'] .ytp-play-progress,
html[it-player-color='blue'] .ytp-scrubber-button,
html[it-player-color='blue'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #1e88e5 !important;
}

html[it-player-color='blue'] .ytp-swatch-color
{
    color: #1e88e5 !important;
}

html[it-player-color='light_blue'] .ytp-play-progress,
html[it-player-color='light_blue'] .ytp-scrubber-button,
html[it-player-color='light_blue'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #03a9f4 !important;
}

html[it-player-color='light_blue'] .ytp-swatch-color
{
    color: #03a9f4 !important;
}

html[it-player-color='cyan'] .ytp-play-progress,
html[it-player-color='cyan'] .ytp-scrubber-button,
html[it-player-color='cyan'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #00bcd4 !important;
}

html[it-player-color='cyan'] .ytp-swatch-color
{
    color: #00bcd4 !important;
}

html[it-player-color='teal'] .ytp-play-progress,
html[it-player-color='teal'] .ytp-scrubber-button,
html[it-player-color='teal'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #009688 !important;
}

html[it-player-color='teal'] .ytp-swatch-color
{
    color: #009688 !important;
}

html[it-player-color='green'] .ytp-play-progress,
html[it-player-color='green'] .ytp-scrubber-button,
html[it-player-color='green'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #4caf50 !important;
}

html[it-player-color='green'] .ytp-swatch-color
{
    color: #4caf50 !important;
}

html[it-player-color='light_green'] .ytp-play-progress,
html[it-player-color='light_green'] .ytp-scrubber-button,
html[it-player-color='light_green'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #8bc34a !important;
}

html[it-player-color='light_green'] .ytp-swatch-color
{
    color: #8bc34a !important;
}

html[it-player-color='lime'] .ytp-play-progress,
html[it-player-color='lime'] .ytp-scrubber-button,
html[it-player-color='lime'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #cddc39 !important;
}

html[it-player-color='lime'] .ytp-swatch-color
{
    color: #cddc39 !important;
}

html[it-player-color='yellow'] .ytp-play-progress,
html[it-player-color='yellow'] .ytp-scrubber-button,
html[it-player-color='yellow'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #ffeb3b !important;
}

html[it-player-color='yellow'] .ytp-swatch-color
{
    color: #ffeb3b !important;
}

html[it-player-color='amber'] .ytp-play-progress,
html[it-player-color='amber'] .ytp-scrubber-button,
html[it-player-color='amber'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #ffc107 !important;
}

html[it-player-color='amber'] .ytp-swatch-color
{
    color: #ffc107 !important;
}

html[it-player-color='orange'] .ytp-play-progress,
html[it-player-color='orange'] .ytp-scrubber-button,
html[it-player-color='orange'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #ff9800 !important;
}

html[it-player-color='orange'] .ytp-swatch-color
{
    color: #ff9800 !important;
}

html[it-player-color='deep_orange'] .ytp-play-progress,
html[it-player-color='deep_orange'] .ytp-scrubber-button,
html[it-player-color='deep_orange'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #ff5722 !important;
}

html[it-player-color='deep_orange'] .ytp-swatch-color
{
    color: #ff5722 !important;
}

html[it-player-color='brown'] .ytp-play-progress,
html[it-player-color='brown'] .ytp-scrubber-button,
html[it-player-color='brown'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #795548 !important;
}

html[it-player-color='brown'] .ytp-swatch-color
{
    color: #795548 !important;
}

html[it-player-color='blue_gray'] .ytp-play-progress,
html[it-player-color='blue_gray'] .ytp-scrubber-button,
html[it-player-color='blue_gray'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #607d8b !important;
}

html[it-player-color='blue_gray'] .ytp-swatch-color
{
    color: #607d8b !important;
}

html[it-player-color='white'] .ytp-play-progress,
html[it-player-color='white'] .ytp-scrubber-button,
html[it-player-color='white'] .ytp-menuitem[aria-checked='true'] .ytp-menuitem-toggle-checkbox
{
    background-color: #fff !important;
}

html[it-player-color='white'] .ytp-swatch-color
{
    color: #fff !important;
}


/*-----------------------------------------------------------------------------
2.5 Transparent background
-----------------------------------------------------------------------------*/

[it-player-transparent-background=true] #player-theater-container,
[it-player-transparent-background=true] #theater-background,
[it-player-transparent-background=true] #player-api,
[it-player-transparent-background=true] .player-api,
[it-player-transparent-background=true] #movie_player,
[it-player-transparent-background=true] #player-container,
[it-player-transparent-background=true] #movie_player video
{
    background-color: transparent !important;
}


/*-----------------------------------------------------------------------------
2.6 Endscreen
-----------------------------------------------------------------------------*/

html[it-player-endscreen=false] .html5-endscreen
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
2.7 Scroll for details
-----------------------------------------------------------------------------*/

html[it-scroll-for-details=false] button.ytp-fullerscreen-edu-button
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
3.0 Details
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
3.1 Style
-----------------------------------------------------------------------------*/

html[it-hide-details=true] #watch7-content,
html[it-hide-details=true] #primary-inner > #info,
html[it-hide-details=true] #primary-inner > #meta
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
3.2 Views count
-----------------------------------------------------------------------------*/

html[data-views-count=hidden] #count.ytd-video-primary-info-renderer,
html[data-views-count=hidden] #watch7-views-info > .watch-view-count
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
3.3 Likes
-----------------------------------------------------------------------------*/

[data-likes=hidden] #watch8-sentiment-actions > .like-button-renderer,
[data-likes=hidden] .video-extras-sparkbar-likes,
[data-likes=hidden] .video-extras-sparkbar-dislikes,
[data-likes=hidden] #info #top-level-buttons ytd-toggle-button-renderer:nth-child(1),
[data-likes=hidden] #info #top-level-buttons ytd-toggle-button-renderer:nth-child(2),
[data-likes=hidden] #sentiment.ytd-video-primary-info-renderer
{
    visibility: hidden !important;

    pointer-events: none !important;
}

[data-likes=icons_only] #watch8-sentiment-actions > .like-button-renderer button > span,
[data-likes=icons_only] .video-extras-sparkbar-likes,
[data-likes=icons_only] .video-extras-sparkbar-dislikes,
[data-likes=icons_only] #top-level-buttons ytd-toggle-button-renderer:nth-child(1) yt-formatted-string,
[data-likes=icons_only] #top-level-buttons ytd-toggle-button-renderer:nth-child(2) yt-formatted-string,
[data-likes=icons_only] #sentiment.ytd-video-primary-info-renderer
{
    visibility: hidden !important;

    pointer-events: none !important;
}

[data-likes=icons_only] .like-button-renderer-like-button,
[data-likes=icons_only] .like-button-renderer-dislike-button
{
    color: transparent !important;
}



/*-----------------------------------------------------------------------------
4.0 Description
-----------------------------------------------------------------------------*/

html[it-description=hidden] ytd-video-secondary-info-renderer ytd-expander.ytd-video-secondary-info-renderer,
html[it-description=hidden] div#action-panel-details,
html[it-description=expanded] #meta-contents ytd-expander[collapsed] paper-button,
html[it-description=expanded] #action-panel-details button
{
    display: none !important;
}

html[it-description=expanded] #meta-contents ytd-expander[collapsed] > #content.ytd-expander,
html[it-description=expanded] #watch-description-text
{
    max-height: unset !important;
}

html[it-description=expanded] .yt-uix-expander .yt-uix-expander-collapsed-body,
html[it-description=expanded] .yt-uix-expander-collapsed .yt-uix-expander-body
{
    display: block !important;
}


/*-----------------------------------------------------------------------------
5.0 Comments
-----------------------------------------------------------------------------*/

html[it-comments=hidden] ytd-comments#comments,
html[it-comments=hidden] div#watch-discussion,
html[it-comments=collapsed].comments-collapsed #comment-section-renderer-items + button,
html[it-comments=collapsed]:not(.comments-collapsed) #improvedtube-collapsed-comments .show-more-text,
html[it-comments=collapsed].comments-collapsed #improvedtube-collapsed-comments .show-less-text,
html[it-comments=collapsed].comments-collapsed #comments #spinner
{
    display: none !important;
}

html[it-comments=collapsed].comments-collapsed #comment-section-renderer-items,
html[it-comments=collapsed].comments-collapsed #comments #sections #contents
{
    overflow: hidden !important;

    height: 0 !important;
}

#sections #improvedtube-collapsed-comments
{
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;

    box-sizing: border-box;
    width: 100%;
    margin: 0 0 3rem;
    padding: 1rem 0;

    cursor: pointer;
    letter-spacing: .007px;
    text-transform: uppercase;

    color: var(--yt-expand-color);
    border: none;
    border-bottom: 1px solid var(--yt-spec-10-percent-layer);
    outline: none;
    background: transparent;
}


/*-----------------------------------------------------------------------------
6.0 Sidebar
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
6.1 Live chat
-----------------------------------------------------------------------------*/

html[it-livechat=hidden] ytd-live-chat-frame#chat,
html[it-livechat=hidden] div#watch-sidebar-live-chat
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
6.2 Playlist
-----------------------------------------------------------------------------*/

html[it-playlist=hidden] ytd-playlist-panel-renderer#playlist,
html[it-playlist=hidden] div#player-playlist,
html[it-playlist=hidden] #placeholder-playlist
{
    display: none !important;
}


/*-----------------------------------------------------------------------------
6.3 Related videos
-----------------------------------------------------------------------------*/

html[it-related-videos=hidden] div#related,
html[it-related-videos=hidden] div#watch7-sidebar-contents,
html[it-related-videos=collapsed].related-videos-collapsed #watch7-sidebar-modules,
html[it-related-videos=collapsed].related-videos-collapsed #related > *:not(#improvedtube-collapsed-related-videos),
html[it-related-videos=collapsed]:not(.related-videos-collapsed) #improvedtube-collapsed-related-videos .show-more-text,
html[it-related-videos=collapsed].related-videos-collapsed #improvedtube-collapsed-related-videos .show-less-text
{
    display: none !important;
}

#improvedtube-collapsed-related-videos
{
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;

    box-sizing: border-box;
    width: 100%;
    margin: 0 0 3rem;
    padding: 1rem 0;

    cursor: pointer;
    letter-spacing: .007px;
    text-transform: uppercase;

    color: var(--yt-expand-color);
    border: none;
    border-bottom: 1px solid var(--yt-spec-10-percent-layer);
    outline: none;
    background: transparent;
}

#watch7-sidebar #improvedtube-collapsed-related-videos
{
    font-size: 12px;
    font-weight: 500;

    display: block;

    width: 95%;
    height: 100%;
    margin: 0 auto 15px !important;
    padding: 10px 0;

    cursor: pointer;
    text-align: center;

    color: #333;
    border: 1px solid #d3d3d3;
    border-color: #c6c6c6;
    outline: 0;
    background-color: #f8f8f8;
    background-image: linear-gradient(to top, #f0f0f0 0, #f8f8f8 100%);
    box-shadow: inset 0 1px 0 #ddd;
}


/*-----------------------------------------------------------------------------
7.0 Footer
-----------------------------------------------------------------------------*/

html[it-footer=hidden] app-drawer#guide #footer,
html[it-footer=hidden] #footer-container.yt-base-gutter
{
    display: none !important;
}