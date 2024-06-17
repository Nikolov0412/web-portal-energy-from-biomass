using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BioEnergy.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateNKIDSectorToString : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Firms_Towns_TownId",
                table: "Firms");

            migrationBuilder.DropForeignKey(
                name: "FK_NKIDs_NKIDSectors_SectorId",
                table: "NKIDs");

            migrationBuilder.DropTable(
                name: "NKIDSectors");

            migrationBuilder.DropIndex(
                name: "IX_NKIDs_SectorId",
                table: "NKIDs");

            migrationBuilder.DropColumn(
                name: "SectorId",
                table: "NKIDs");

            migrationBuilder.AddColumn<string>(
                name: "Sector",
                table: "NKIDs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Towns_Id",
                table: "Towns",
                column: "Id",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Firms_Towns_TownId",
                table: "Firms",
                column: "TownId",
                principalTable: "Towns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Firms_Towns_TownId",
                table: "Firms");

            migrationBuilder.DropIndex(
                name: "IX_Towns_Id",
                table: "Towns");

            migrationBuilder.DropColumn(
                name: "Sector",
                table: "NKIDs");

            migrationBuilder.AddColumn<Guid>(
                name: "SectorId",
                table: "NKIDs",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "NKIDSectors",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NKIDSectors", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NKIDs_SectorId",
                table: "NKIDs",
                column: "SectorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Firms_Towns_TownId",
                table: "Firms",
                column: "TownId",
                principalTable: "Towns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_NKIDs_NKIDSectors_SectorId",
                table: "NKIDs",
                column: "SectorId",
                principalTable: "NKIDSectors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
