export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

type RoleDescriptions = Record<UserRole, string>;

const roleDescriptions: RoleDescriptions = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};
    