const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: "Mike",
            room: "Course"
        },
        {
            id: '2',
            name: "Morgan",
            room: "React"
        }, {
            id: '3',
            name: "Mel",
            room: "Course"
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jhosehp',
            room: 'World cup fantasy'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '10';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '20';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Course', () => {
        var userList = users.getUserList('Course');

        expect(userList).toEqual(['Mike', 'Mel']);
    });

    it('should return names for React', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Morgan']);
    });
})