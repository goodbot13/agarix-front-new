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
        skinsType: 'Custom',
        ringsType: 'Disabled',
        ringsSpinning: true,
        soakSpeed: 5,
        fadeSpeed: 35,
        oneColored: false,
        shadow: 'All'
      },
      effects: {
        cellRemoveAnimation: '2CL',
        cellRemoveAnimationForHiddenSpectator: false,
        spawnAnimation: 'Acimazis',
        wtfRgbMode: false
      },
      gameplay: {
        animationSpeed: 145,
        zoomSpeed: 8,
        cameraSpeed: 19,
        cameraStyle: 'Default',
        spectatorMode: 'Top one',
        viewport: 'Disabled'
      },
      minimap: {
        enabled: true,
        viewport: 'All',
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
        staticColor: true,
        smoothSwitch: true
      },
      performance: {
        renderMode: 'GPU (Pixi)',
        antialiasing: false,
        culling: false,
        foodPerformanceMode: true,
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
        shadowDistance: 10,
        shadowStrength: 1,
        myShadowStrength: 2,
        myShadowDistance: 20,
        adaptiveShadow: true,
        transparency: 1,
        colorLighten: 100
      }, 
      food: {
        enabled: true,
        firstTabEnabled: true,
        secondTabEnabled: true,
        topOneTabEnabled: true,
        size: 15,
        color: { red: 255, green: 255, blue: 255 },
        glow: false,
        glowColor: { red: 174, green: 192, blue: 255 },
        glowDistance: 30,
        glowStrength: 6,
        crisp: true
      },
      map: {
        borderType: 'Common',
        borderRoundness: 60,
        borderWidth: 30,
        borderColor: { red: 255, green: 255, blue: 255 },
        borderGlow: false,
        borderGlowColor: { red: 174, green: 192, blue: 255 },
        borderGlowDistance: 60,
        borderGlowStrength: 6,
        backgroundTint: { red: 6, green: 6, blue: 6 },
        backgroundImage: false,
        backgroundImageUrl: '',
        backgroundImageLiveEffectStrength: 'Disabled',
        globalBackgroundImage: false,
        globalBackgroundImageUrl: '',
        globalBackgroundImageTint: { red: 13, green: 52, blue: 84 },
        globalBackgroundImageLiveEffectStrength: 'Disabled'
      },
      minimap: {
        backgroundColor: { red: 16, green: 16, blue: 16, alpha: .5 },
        size: 230,
        myViewportColor: { red: 110, green: 110, blue: 110, alpha: .45 },
        topOneViewportColor: { red: 64, green: 64, blue: 64, alpha: .45},
        playerSize: 10,
        playerColor: { red: 255, green: 255, blue: 255 },
        ghostCellsColor: { red: 200, green: 200, blue: 200 }
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
        color: { red: 16, green: 16, blue: 16 },
        borderWidth: 12,
        borderColor: { red: 255, green: 255, blue: 255 },
        glow: false,
        glowColor: { red: 85, green: 190, blue: 255 },
        glowDistance: 50,
        glowStrength: 5,
        transparency: 0.25,
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
        height: 300,
        chatType: 'CHATBOX',
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        fontColor: { red: 255, green: 255, blue: 255 },
        commandMessageBackgroundColor: { red: 210, green: 110, blue: 110, alpha: 0.75 },
        commandMessageFontColor: { red: 255, green: 255, blue: 255 },
        gameMessageBackgroundColor: { red: 32, green: 32, blue: 32, alpha: 0.75 },
        gameMessageFontColor: { red: 240, green: 240, blue: 240 }
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