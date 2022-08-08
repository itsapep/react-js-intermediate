// replacing mapStateToProps in redux
export const hookSelector = state => {
    return state.hookReducer.number
}