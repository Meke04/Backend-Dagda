import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",

    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
        },

        name: {
            type: "varchar",
            length: 150,
        },

        email: {
            type: "varchar",
            unique: true,
        },

        password: {
            type: "varchar",
        },

        phone: {
            type: "varchar",
            nullable: true,
        },

        cpf: {
            type: "varchar",
            unique: true,
            nullable: true,
        },

        dateOfBirth: {
            type: "date",
            nullable: true,
        },

        role: {
            type: "varchar",
            default: "CUSTOMER",
        },

        status: {
            type: "varchar",
            default: "ACTIVE",
        },

        emailVerified: {
            type: "boolean",
            default: false,
        },

        createdAt: {
            type: "timestamp",
            createDate: true,
        },

        updatedAt: {
            type: "timestamp",
            updateDate: true,
        },

        deletedAt: {
            type: "timestamp",
            nullable: true,
        },
    },
});