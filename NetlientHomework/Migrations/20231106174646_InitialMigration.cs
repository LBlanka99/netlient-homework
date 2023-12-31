﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NetlientHomework.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DataModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ItemNumber = table.Column<string>(type: "TEXT", nullable: false),
                    ItemName = table.Column<string>(type: "TEXT", nullable: false),
                    NetPrice = table.Column<int>(type: "INTEGER", nullable: false),
                    Tax = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModel", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataModel");

            migrationBuilder.DropTable(
                name: "UserModel");
        }
    }
}
