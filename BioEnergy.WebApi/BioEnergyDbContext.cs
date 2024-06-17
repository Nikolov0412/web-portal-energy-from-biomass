using Microsoft.EntityFrameworkCore;
using BioEnergy.WebApi;
using BioEnergy.WebApi.Models;

namespace BioEnergy.WebApi;

public class BioEnergyDbContext : DbContext
{
    public DbSet<Biomass> Biomasses { get; set; }
    public DbSet<EnergyProduct> EnergyProducts { get; set; }
    public DbSet<Firm> Firms { get; set; }
    public DbSet<FirmData> FirmDatas { get; set; }
    public DbSet<PowerMeasure> PowerMeasures { get; set; }
    public DbSet<HeatMeasure> HeatMeasures { get; set; }
    public DbSet<NKID> NKIDs { get; set; }
    public DbSet<Town> Towns { get; set; }

    public BioEnergyDbContext()
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Firm>(entity =>
        {
            entity.Property(f => f.EndYear)
                  .IsRequired(false); // Ensure EndYear is nullable

            entity.HasOne(f => f.Town)
                  .WithMany() // Not configuring a back reference
                  .OnDelete(DeleteBehavior.Restrict); // Prevent cascading deletes
        });

        modelBuilder.Entity<Town>(entity =>
        {
            entity.HasKey(t => t.Id);
            entity.HasIndex(t => t.Id).IsUnique();
        });

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.Firm)
                .WithMany();

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.Product)
                .WithMany();

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.NKID)
                .WithMany();

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.Source)
                .WithMany();

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.Measure)
                .WithMany();

            modelBuilder.Entity<FirmData>()
                .HasOne(fd => fd.QuantityMeasurement)
                .WithMany();

            modelBuilder.Entity<Firm>()
                .HasOne(f => f.Town)
                .WithMany();

            modelBuilder.Entity<Town>()
                .HasKey(t => t.Id);

            modelBuilder.Entity<EnergyProduct>()
                .HasKey(ep => ep.Id);

            modelBuilder.Entity<NKID>()
                .HasKey(nkid => nkid.Id);

            modelBuilder.Entity<Biomass>()
                .HasKey(b => b.Id);

            modelBuilder.Entity<PowerMeasure>()
                .HasKey(pm => pm.Id);

            modelBuilder.Entity<HeatMeasure>()
                .HasKey(hm => hm.Id);

        }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=;Database=BioMass;User=sa;Password=;TrustServerCertificate=True");
    }

}
