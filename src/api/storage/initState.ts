import { TStorage } from './Storage';

const initStorage: TStorage = {
  settings: {
    game: {
      cells : {
        mass: true,
        nicks: true,
        myMass: true,
        myNick: true,
        autoHideMassAndNicks: true,
        skinsType: 'All',
        ringsType: 'Disabled',
        ringsSpinning: true,
        soakSpeed: '1',
        fadeSpeed: '2',
        oneColored: false,
        shadow: 'Disabled'
      },
      effects: {
        cellRemoveAnimation: 'Disabled',
        cellRemoveAnimationForHiddenSpectator: false,
        spawnAnimation: 'Acimazis',
        wtfRgbMode: false
      },
      gameplay: {
        animationSpeed: 10,
        zoomSpeed: 5,
        cameraSpeed: 5,
        cameraStyle: 'Default',
        spectatorMode: 'Top one',
        viewport: 'Disabled'
      },
      minimap: {
        enabled: true,
        viewport: 'Disabled',
        ghostCells: true,
        realPlayersCells: true,
        mass: false,
        nicks: true,
        playerPosition: true
      },
      multibox: {
        enabled: false,
        ring: true,
        changeRingColor: true,
        changeCellColor: false,
        hideOwnSkins: true,
        staticColor: true
      },
      performance: {
        renderMode: 'GPU (Pixi)',
        antialiasing: false,
        culling: false,
        foodPerformanceMode: false,
        glowFilterShaderType: 'GPU-1',
        fpsLockType: 'Screen-hz'
      }
    },
    hotkeys: {
      keyboard: {
        feed: 'E',
        macroFeed: 'W',
        split: 'Space',
        doubleSplit: '',
        tripleSplit: '',
        splitSixteen: '',
        quickRespawn: 'Backquote',
        pauseCell: 'P',
        toggleCellHelpers: '',
        toggleCellSkins: '',
        toggleCellRings: '',
        switchTabs: 'Tab',
        toggleFoodRender: 'F',
        toggleSpectatorMode: '',
        toggleHuds: ''
      }
    },
    theming: {
      cells: {
        oneColoredColor: { red: 240, green: 240, blue: 240 },
        oneColoredStatsColor: { red: 32, green: 32, blue: 32 },
        shadowColor: { red: 255, green: 255, blue: 255 },
        myShadowColor: { red: 255, green: 255, blue: 255 },
        shadowDistance: 15,
        shadowStrength: 2,
        myShadowStrength: 5,
        myShadowDistance: 50,
        adaptiveShadow: true,
        transparency: 0.98,
        colorLighten: 130
      }, 
      food: {
        enabled: true,
        firstTabEnabled: true,
        secondTabEnabled: true,
        topOneTabEnabled: true,
        size: 16,
        color: { red: 255, green: 255, blue: 255 },
        glow: true,
        glowColor: { red: 174, green: 192, blue: 255 },
        glowDistance: 60,
        glowStrength: 6,
        crisp: true
      },
      map: {
        borderType: 'RGB (anim)',
        borderRoundness: 0,
        borderWidth: 25,
        borderColor: { red: 255, green: 255, blue: 255 },
        borderGlow: false,
        borderGlowColor: { red: 174, green: 192, blue: 255 },
        borderGlowDistance: 190,
        borderGlowStrength: 9,
        backgroundTint: { red: 51, green: 58, blue: 106 },
        backgroundImage: true,
        backgroundImageUrl: 'https://i.imgur.com/BlVisqX.jpg',
        backgroundImageLiveEffectStrength: 'Disabled',
        globalBackgroundImage: true,
        globalBackgroundImageUrl: 'https://i.imgur.com/BlVisqX.jpg',
        globalBackgroundImageTint: { red: 13, green: 52, blue: 84 },
        globalBackgroundImageLiveEffectStrength: 'Disabled'
      },
      minimap: {
        backgroundColor: { red: 35, green: 45, blue: 85, alpha: .25 },
        size: 240,
        myViewportColor: { red: 0, green: 0, blue: 0, alpha: .66 },
        topOneViewportColor: { red: 0, green: 0, blue: 0, alpha: .66 },
        playerSize: 10,
        playerColor: { red: 255, green: 255, blue: 255 },
        ghostCellsColor: { red: 60, green: 80, blue: 170 }
      },
      multibox: {
        ringStyle: 'Line',
        linedRingSize: 80,
        initialRingColor: { red: 255, green: 255, blue: 255 },
        focusedRingColor: { red: 60, green: 80, blue: 170 },
        initialStaticCellColor: { red: 255, green: 255, blue: 255 },
        focusedStaticCellColor: { red: 255, green: 255, blue: 255 }
      },
      viruses: {
        color: { red: 85, green: 190, blue: 255 },
        borderWidth: 10,
        borderColor: { red: 255, green: 255, blue: 255 },
        glow: true,
        glowColor: { red: 85, green: 190, blue: 255 },
        glowDistance: 150,
        glowStrength: 10,
        transparency: 1,
        massType: 'Fill circle',
        fillCircleColor: { red: 255, green: 255, blue: 255 },
      }
    },
    UI: {
      leaderboard: {
        shown: true,
        displayAmount: 10,
        displayPosition: true,
        scale: 1,
        showMass: true,
        backdropBlur: false,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        meColor: { red: 60, green: 80, blue: 170 },
      },
      stats: {
        shown: true,
        position: 'BOTTOM CENTER',
        fps: true,
        loss: true,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        backdropBlur: false,
        frametime: true
      },
      topTeam: {
        shown: true,
        displayAmount: 5,
        totalMass: true,
        shortMass: true,
        displayPlayerMass: true,
        totalPlayers: true,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        backdropBlur: false,
      },
      spectate: {
        shown: true,
        backdropBlur: false,
        backgroundColor: { red: 19, green: 19, blue: 19 },
      },
      chat: {
        enabled: true,
        height: 280,
        chatType: 'CHATBOX',
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        fontColor: { red: 255, green: 255, blue: 255 },
        commandMessageBackgroundColor: { red: 255, green: 130, blue: 130, alpha: 0.9 },
        commandMessageFontColor: { red: 255, green: 255, blue: 255 },
        gameMessageBackgroundColor: { red: 255, green: 255, blue: 255, alpha: 0.9 },
        gameMessageFontColor: { red: 0, green: 0, blue: 0 }
      }  
    }
  },
  game: {
    servers: [
      { location: 'China', playersAmount: 0 },
      { location: 'East Asia', playersAmount: 0 },
      { location: 'Europe', playersAmount: 4891 },
      { location: 'North America', playersAmount: 0 },
      { location: 'Oceania', playersAmount: 0 },
      { location: 'Russia', playersAmount: 0 },
      { location: 'South America', playersAmount: 9724 },
      { location: 'Turkey', playersAmount: 0 }
    ],
    currentServerIndex: 2,
    mode: ':party',
    tag: '',
    token: '',
    gameServerToken: '',
    selectedGameTokenType: "PARTY"
  },
  profiles: {
    leftProfiles: [
      { nick: 'Profile #1', skinUrl: '', tag: '' },
      { nick: 'Profile #2', skinUrl: '', tag: '' },
      { nick: 'Profile #3', skinUrl: '', tag: '' },
      { nick: 'Profile #4', skinUrl: '', tag: '' },
      { nick: 'Profile #5', skinUrl: '', tag: '' },
      { nick: 'Profile #6', skinUrl: '', tag: '' },
      { nick: 'Profile #7', skinUrl: '', tag: '' },
      { nick: 'Profile #8', skinUrl: '', tag: '' },
      { nick: 'Profile #9', skinUrl: '', tag: '' },
      { nick: 'Profile #10', skinUrl: '', tag: '' }
    ],
    rightProfiles: [
      { nick: 'Profile #11', skinUrl: '', tag: '' },
      { nick: 'Profile #12', skinUrl: '', tag: '' },
      { nick: 'Profile #13', skinUrl: '', tag: '' },
      { nick: 'Profile #14', skinUrl: '', tag: '' },
      { nick: 'Profile #15', skinUrl: '', tag: '' },
      { nick: 'Profile #16', skinUrl: '', tag: '' },
      { nick: 'Profile #17', skinUrl: '', tag: '' },
      { nick: 'Profile #18', skinUrl: '', tag: '' },
      { nick: 'Profile #19', skinUrl: '', tag: '' },
      { nick: 'Profile #20', skinUrl: '', tag: '' }
    ],
    leftSelectedIndex: 0,
    rightSelectedIndex: 0,
    leftProfileLoginType: 'FACEBOOK',
    rightProfileLoginType: 'GOOGLE',
    googleLoggedIn: false,
    facebookLoggedIn: false
  }
};

export default initStorage;