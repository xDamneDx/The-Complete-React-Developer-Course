import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = 'someIdGoesHere';
    const state = authReducer({}, { type: 'LOGIN', uid });
    expect(state.uid).toBe(uid);
});

test('Should clear uid for logout', () => {
    const state = authReducer({ uid: 'someId' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});
