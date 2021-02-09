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
        shadow: 'All'
      },
      effects: {
        cellRemoveAnimation: 'Default',
        cellRemoveAnimationForHiddenSpectator: false,
        spawnAnimation: 'Acimazis',
        wtfRgbMode: false
      },
      gameplay: {
        animationSpeed: 3,
        zoomSpeed: 5,
        cameraSpeed: 5,
        cameraStyle: 'Default',
        spectatorMode: 'Disabled',
        viewport: 'Disabled'
      },
      minimap: {
        enabled: true,
        viewport: 'Disabled',
        ghostCells: true,
        realPlayersCells: false,
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
        quickRespawn: '',
        pauseCell: 'P',
        toggleCellHelpers: '',
        toggleCellSkins: '',
        toggleCellRings: '',
        switchTabs: 'Tab',
        toggleFoodRender: '',
        toggleSpectatorMode: '',
        toggleHuds: ''
      }
    },
    theming: {
      cells: {
        oneColoredColor: { red: 240, green: 240, blue: 240 },
        oneColoredStatsColor: { red: 0, green: 0, blue: 0 },
        shadowColor: { red: 0, green: 0, blue: 0 },
        myShadowColor: { red: 0, green: 0, blue: 0 },
        shadowDistance: 10,
        shadowStrength: 2,
        transparency: 0.98
      }, 
      food: {
        size: 16,
        color: { red: 255, green: 255, blue: 255 },
        glow: true,
        glowColor: { red: 0, green: 200, blue: 128 },
        glowDistance: 90,
        glowStrength: 9,
        crisp: true
      },
      map: {
        borderType: 'Common',
        borderRoundness: 60,
        borderWidth: 25,
        borderColor: { red: 0, green: 0, blue: 0 },
        borderGlow: true,
        borderGlowColor: { red: 0, green: 0, blue: 0 },
        borderGlowDistance: 220,
        borderGlowStrength: 11,
        backgroundTint: { red: 0, green: 0, blue: 0 },
        backgroundImage: true,
        backgroundImageUrl: '',
        backgroundImageLiveEffectStrength: '4',
        globalBackgroundImage: true,
        globalBackgroundImageUrl: '',
        globalBackgroundImageTint: { red: 0, green: 0, blue: 0 },
        globalBackgroundImageLiveEffectStrength: '4'
      },
      minimap: {
        backgroundColor: { red: 0, green: 0, blue: 0 },
        size: 250,
        myViewportColor: { red: 0, green: 0, blue: 0 },
        topOneViewportColor: { red: 0, green: 0, blue: 0 },
        playerSize: 10,
        playerColor: { red: 0, green: 0, blue: 0 },
        ghostCellsColor: { red: 0, green: 0, blue: 0 }
      },
      multibox: {
        ringStyle: 'Line',
        linedRingSize: 80,
        initialRingColor: { red: 0, green: 0, blue: 0 },
        focusedRingColor: { red: 0, green: 0, blue: 0 },
        initialStaticCellColor: { red: 0, green: 0, blue: 0 },
        focusedStaticCellColor: { red: 0, green: 0, blue: 0 }
      },
      viruses: {
        color: { red: 0, green: 0, blue: 0 },
        borderWidth: 8,
        borderColor: { red: 0, green: 0, blue: 0 },
        glow: true,
        glowColor: { red: 0, green: 0, blue: 0 },
        glowDistance: 120,
        glowStrength: 8,
        transparency: 1,
        massType: 'Fill circle',
        fillCircleColor: { red: 0, green: 0, blue: 0 },
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
    mode: 'Party',
    tag: '',
    token: ''
  },
  profiles: {
    leftProfiles: [
      { nick: 'Profile #1', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #2', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #3', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #4', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #5', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #6', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #7', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #8', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #9', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #10', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' }
    ],
    rightProfiles: [
      { nick: 'Profile #11', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #12', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #13', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #14', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #15', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #16', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #17', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #18', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #19', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
      { nick: 'Profile #20', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' }
    ],
    leftSelectedIndex: 0,
    rightSelectedIndex: 0,
  }
};

export default initStorage;