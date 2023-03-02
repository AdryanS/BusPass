import jest from 'jest'

jest.mock('global', () => ({
    ...global,
    WebSocket: function WebSocket() {},
}));