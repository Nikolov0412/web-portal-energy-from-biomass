using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BioEnergy.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Biomasses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CNCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CPIDCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BulName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Biomasses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EnergyProducts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CNCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BulName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Biotech = table.Column<bool>(type: "bit", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnergyProducts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HeatMeasures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeatMeasures", x => x.Id);
                });

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

            migrationBuilder.CreateTable(
                name: "PowerMeasures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PowerMeasures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Towns",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Municipality = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Latitude = table.Column<float>(type: "real", nullable: false),
                    Longtitude = table.Column<float>(type: "real", nullable: false),
                    EKATTE = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Towns", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NKIDs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GroupKID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SectorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NKIDs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NKIDs_NKIDSectors_SectorId",
                        column: x => x.SectorId,
                        principalTable: "NKIDSectors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Firms",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EIK = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TownId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartYear = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndYear = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Firms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Firms_Towns_TownId",
                        column: x => x.TownId,
                        principalTable: "Towns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FirmDatas",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirmId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirmName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NKIDId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SourceId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Power = table.Column<double>(type: "float", nullable: false),
                    MeasureId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    QuantityMeasurementId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    HeatQuantity = table.Column<int>(type: "int", nullable: false),
                    Certification = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FirmDatas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FirmDatas_Biomasses_SourceId",
                        column: x => x.SourceId,
                        principalTable: "Biomasses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FirmDatas_EnergyProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "EnergyProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FirmDatas_Firms_FirmId",
                        column: x => x.FirmId,
                        principalTable: "Firms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FirmDatas_HeatMeasures_QuantityMeasurementId",
                        column: x => x.QuantityMeasurementId,
                        principalTable: "HeatMeasures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FirmDatas_NKIDs_NKIDId",
                        column: x => x.NKIDId,
                        principalTable: "NKIDs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FirmDatas_PowerMeasures_MeasureId",
                        column: x => x.MeasureId,
                        principalTable: "PowerMeasures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_FirmId",
                table: "FirmDatas",
                column: "FirmId");

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_MeasureId",
                table: "FirmDatas",
                column: "MeasureId");

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_NKIDId",
                table: "FirmDatas",
                column: "NKIDId");

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_ProductId",
                table: "FirmDatas",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_QuantityMeasurementId",
                table: "FirmDatas",
                column: "QuantityMeasurementId");

            migrationBuilder.CreateIndex(
                name: "IX_FirmDatas_SourceId",
                table: "FirmDatas",
                column: "SourceId");

            migrationBuilder.CreateIndex(
                name: "IX_Firms_TownId",
                table: "Firms",
                column: "TownId");

            migrationBuilder.CreateIndex(
                name: "IX_NKIDs_SectorId",
                table: "NKIDs",
                column: "SectorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FirmDatas");

            migrationBuilder.DropTable(
                name: "Biomasses");

            migrationBuilder.DropTable(
                name: "EnergyProducts");

            migrationBuilder.DropTable(
                name: "Firms");

            migrationBuilder.DropTable(
                name: "HeatMeasures");

            migrationBuilder.DropTable(
                name: "NKIDs");

            migrationBuilder.DropTable(
                name: "PowerMeasures");

            migrationBuilder.DropTable(
                name: "Towns");

            migrationBuilder.DropTable(
                name: "NKIDSectors");
        }
    }
}
