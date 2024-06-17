import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getBiomasses, createBiomass, updateBiomass, deleteBiomass } from '../../services/biomassService';
import tableConfig from '../table-configs/biomass-table.json';
import { Biomass, BiomassDTO } from '../../models/IBiomass';
import { IColumnConfigs } from '../../models/ITableConfig';

const BiomassDataGrid: React.FC = () => {
  const [biomasses, setBiomasses] = useState<Biomass[]>([]);
  const [selectedBiomass, setSelectedBiomass] = useState<Biomass | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<BiomassDTO>({
    cnCode: '',
    cpidCode: '',
    name: '',
    bulName: '',
    description: ''
  });

  useEffect(() => {
    fetchBiomasses();
  }, []);

  const fetchBiomasses = async () => {
    try {
      const response = await getBiomasses();
      setBiomasses(response.data);
    } catch (error) {
      console.error('Failed to fetch biomasses', error);
    }
  };

  const handleAddClick = () => {
    setSelectedBiomass(null);
    setFormValues({
      cnCode: '',
      cpidCode: '',
      name: '',
      bulName: '',
      description: ''
    });
    setOpen(true);
  };

  const handleEditClick = (biomass: Biomass) => {
    setSelectedBiomass(biomass);
    setFormValues({
      cnCode: biomass.cnCode,
      cpidCode: biomass.cpidCode,
      name: biomass.name,
      bulName: biomass.bulName,
      description: biomass.description
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteBiomass(id);
      fetchBiomasses();
    } catch (error) {
      console.error('Failed to delete biomass', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedBiomass) {
        await updateBiomass(selectedBiomass.id, formValues);
      } else {
        await createBiomass(formValues);
      }
      fetchBiomasses();
      handleClose();
    } catch (error) {
      console.error('Failed to save biomass', error);
    }
  };
  const parseColumns = (configJson: IColumnConfigs): GridColDef[] => {
    const columns: GridColDef[] = Object.values(configJson).map(config => ({
      field: config.field,
      headerName: config.headerName,
      flex: config.flex
    }));
  
    // Adding the last column with the buttons
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditClick(params.row as Biomass)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as Biomass).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Biomass</Button>
      <DataGrid rows={biomasses} columns={columns}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedBiomass ? 'Edit Biomass' : 'Add Biomass'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="CN Code"
            type="text"
            fullWidth
            value={formValues.cnCode}
            onChange={(e) => setFormValues({ ...formValues, cnCode: e.target.value })}
          />
          <TextField
            margin="dense"
            label="CPID Code"
            type="text"
            fullWidth
            value={formValues.cpidCode}
            onChange={(e) => setFormValues({ ...formValues, cpidCode: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Bulgarian Name"
            type="text"
            fullWidth
            value={formValues.bulName}
            onChange={(e) => setFormValues({ ...formValues, bulName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={formValues.description}
            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BiomassDataGrid;
