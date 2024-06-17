import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { getFirms, createFirm, updateFirm, deleteFirm } from '../../services/firmService';
import { getTowns } from '../../services/townService';
import { Firm, FirmDTO } from '../../models/IFirm';
import { IColumnConfigs } from '../../models/ITableConfig';
import tableConfig from '../table-configs/firm-table.json';
import { Town } from '../../models/ITowns';
import { log } from 'console';

const FirmDataGrid: React.FC = () => {
  const [firms, setFirms] = useState<Firm[]>([]);
  const [towns, setTowns] = useState<Town[]>([]);
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<FirmDTO>({
    eik: 0,
    name: '',
    description: '',
    address: '',
    town: { id: '', name: '', municipality: '', latitude: 0, longtitude: 0, ekatte: 0 },
    email: '',
    startYear: '',
    endYear: '',
    status: '',
  });

  useEffect(() => {
    fetchFirms();
    fetchTowns();
  }, []);

  const fetchFirms = async () => {
    try {
      const response = await getFirms();
      setFirms(response.data);
    } catch (error) {
      console.error('Failed to fetch firms', error);
    }
  };

  const fetchTowns = async () => {
    try {
      const response = await getTowns();
      setTowns(response.data);
    } catch (error) {
      console.error('Failed to fetch towns', error);
    }
  };

  const handleAddClick = () => {
    setSelectedFirm(null);
    setFormValues({
      eik: 0,
      name: '',
      description: '',
      address: '',
      town: { id: '', name: '', municipality: '', latitude: 0, longtitude: 0, ekatte: 0 },
      email: '',
      startYear: '',
      endYear: '',
      status: '',
    });
    setOpen(true);
  };

  const handleEditClick = (firm: Firm) => {
    setSelectedFirm(firm);
    setFormValues({
      eik: firm.eik,
      name: firm.name,
      description: firm.description,
      address: firm.address,
      town: firm.town,
      email: firm.email,
      startYear: firm.startYear,
      endYear: firm.endYear || '',
      status: firm.status,
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteFirm(id);
      fetchFirms();
    } catch (error) {
      console.error('Failed to delete firm', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    const preparedFormValues = {
      ...formValues,
      endYear: formValues.endYear === '' ? null : formValues.endYear,
    };

    try {
      if (selectedFirm) {
        await updateFirm(selectedFirm.id, preparedFormValues);
      } else {
        await createFirm(preparedFormValues);
      }
      fetchFirms();
      handleClose();
    } catch (error) {
      console.error('Failed to save firm', error);
    }
  };

  const parseColumns = (configJson: IColumnConfigs): GridColDef[] => {
    const columns: GridColDef[] = Object.values(configJson).map(config => {
      if(config.field=='town'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.name:'',
        };
  
      }
      return {
        field: config.field,
        headerName: config.headerName,
        flex: config.flex,
      };
    });
  
    // Adding the last column with the buttons
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params: { row: Firm }) => (
        <>
          <Button onClick={() => handleEditClick(params.row)}>Edit</Button>
          <Button onClick={() => handleDeleteClick(params.row.id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  

  const columns = parseColumns(tableConfig);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Firm</Button>
      <DataGrid rows={firms} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedFirm ? 'Edit Firm' : 'Add Firm'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="EIK"
            type="number"
            fullWidth
            value={formValues.eik}
            onChange={(e) => setFormValues({ ...formValues, eik: parseInt(e.target.value, 10) })}
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
            label="Description"
            type="text"
            fullWidth
            value={formValues.description}
            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            value={formValues.address}
            onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Town</InputLabel>
            <Select
              value={formValues.town.id}
              onChange={(e) => {
                const selectedTown = towns.find(town => town.id === e.target.value);
                if (selectedTown) {
                  setFormValues({ ...formValues, town: selectedTown });
                }
              }}
              label="Town"
            >
              {towns.map((town) => (
                <MenuItem key={town.id} value={town.id}>
                  {town.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Start Year"
            type="date"
            fullWidth
            value={formValues.startYear}
            onChange={(e) => setFormValues({ ...formValues, startYear: e.target.value })}
          />
          <TextField
            margin="dense"
            label="End Year"
            type="date"
            fullWidth
            value={formValues.endYear}
            onChange={(e) => setFormValues({ ...formValues, endYear: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            value={formValues.status}
            onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
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

export default FirmDataGrid;
