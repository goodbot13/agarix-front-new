import StoreLink from "api/StoreLink"
import { setHudsShown } from "redux/UI/actions"

export const feed = () => {

}

export const macroFeed = () => {
  
}

export const stopMacroFeed = () => {
  
}

export const split = () => {
  
}

export const doubleSplit = () => {
  
}

export const tripleSplit = () => {
  
}

export const splitSixteen = () => {
  
}

export const quickRespawn = () => {
  
}

export const pauseCell = () => {
  
}

export const toggleCellHelpers = () => {
  
}

export const toggleCellSkins  = () => {
  
}

export const toggleCellRings = () => {
  
}

export const switchTabs = () => {
  
}

export const toggleFoodRender = () => {
  
}

export const toggleSpectatorMode = () => {
  
}

export const toggleHuds = () => {
  StoreLink.store.dispatch(setHudsShown(!StoreLink.store.getState().UI.hudsShown));
}