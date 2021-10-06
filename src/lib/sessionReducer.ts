export function sessionReducer(state: any, action: any) {
    let newState;
    switch(action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                userToken: action.token,
                isLoading: false,
              };   
        case "SIGN_IN":
            return {
                ...state,
                isSignout: false,
                userToken: action.token,
            }
        
    }
}