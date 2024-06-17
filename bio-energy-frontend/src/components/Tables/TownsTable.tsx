import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getTowns, createTown, updateTown, deleteTown } from '../../services/townService';
import tableConfig from '../table-configs/town-table.json';
import { IColumnConfigs } from '../../models/ITableConfig';
import { Town, TownDTO } from '../../models/ITowns';


const TownDataGrid: React.FC = () => {
  const [towns, setTowns] = useState<Town[]>([]);
  const [selectedTown, setSelectedTown] = useState<Town | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<TownDTO>({
    name: '',
    municipality: '',
    latitude: 0,
    longtitude: 0,
    ekatte: 0
  });

  useEffect(() => {
    fetchTowns();
  }, []);

  const fetchTowns = async () => {
    try {
      const response = await getTowns();
      setTowns(response.data);
    } catch (error) {
      console.error('Failed to fetch towns', error);
    }
  };

  const handleAddClick = () => {
    setSelectedTown(null);
    setFormValues({
      name: '',
      municipality: '',
      latitude: 0,
      longtitude: 0,
      ekatte: 0
    });
    setOpen(true);
  };

  const handleEditClick = (town: Town) => {
    setSelectedTown(town);
    setFormValues({
      name: town.name,
      municipality: town.municipality,
      latitude: town.latitude,
      longtitude: town.longtitude,
      ekatte: town.ekatte
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteTown(id);
      fetchTowns();
    } catch (error) {
      console.error('Failed to delete town', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedTown) {
        await updateTown(selectedTown.id, formValues);
      } else {
        await createTown(formValues);
      }
      fetchTowns();
      handleClose();
    } catch (error) {
      console.error('Failed to save town', error);
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
          <Button onClick={() => handleEditClick(params.row as Town)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as Town).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Town</Button>
      <DataGrid rows={towns} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedTown ? 'Edit Town' : 'Add Town'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Municipality"
            type="text"
            fullWidth
            value={formValues.municipality}
            onChange={(e) => setFormValues({ ...formValues, municipality: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Latitude"
            type="number"
            fullWidth
            value={formValues.latitude}
            onChange={(e) => setFormValues({ ...formValues, latitude: parseFloat(e.target.value) })}
          />
          <TextField
            margin="dense"
            label="Longitude"
            type="number"
            fullWidth
            value={formValues.longtitude}
            onChange={(e) => setFormValues({ ...formValues, longtitude: parseFloat(e.target.value) })}
          />
          <TextField
            margin="dense"
            label="EKATTE"
            type="number"
            fullWidth
            value={formValues.ekatte}
            onChange={(e) => setFormValues({ ...formValues, ekatte: parseInt(e.target.value, 10) })}
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

export default TownDataGrid;
