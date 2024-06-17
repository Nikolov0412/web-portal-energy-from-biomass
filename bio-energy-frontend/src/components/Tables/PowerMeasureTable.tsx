import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getPowerMeasures, createPowerMeasure, updatePowerMeasure, deletePowerMeasure } from '../../services/powermeasureService';
import tableConfig from '../table-configs/powermeasure-table.json';
import { PowerMeasure, PowerMeasureDTO } from '../../models/IMeasure';
import { IColumnConfigs } from '../../models/ITableConfig';



const PowerMeasureDataGrid: React.FC = () => {
  const [powerMeasures, setPowerMeasures] = useState<PowerMeasure[]>([]);
  const [selectedPowerMeasure, setSelectedPowerMeasure] = useState<PowerMeasure | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<PowerMeasureDTO>({
    unit: '',
    description: ''
  });

  useEffect(() => {
    fetchPowerMeasures();
  }, []);

  const fetchPowerMeasures = async () => {
    try {
      const response = await getPowerMeasures();
      setPowerMeasures(response.data);
    } catch (error) {
      console.error('Failed to fetch power measures', error);
    }
  };

  const handleAddClick = () => {
    setSelectedPowerMeasure(null);
    setFormValues({
      unit: '',
      description: ''
    });
    setOpen(true);
  };

  const handleEditClick = (powerMeasure: PowerMeasure) => {
    setSelectedPowerMeasure(powerMeasure);
    setFormValues({
      unit: powerMeasure.unit,
      description: powerMeasure.description
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deletePowerMeasure(id);
      fetchPowerMeasures();
    } catch (error) {
      console.error('Failed to delete power measure', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedPowerMeasure) {
        await updatePowerMeasure(selectedPowerMeasure.id, formValues);
      } else {
        await createPowerMeasure(formValues);
      }
      fetchPowerMeasures();
      handleClose();
    } catch (error) {
      console.error('Failed to save power measure', error);
    }
  };
  const parseColumns = (configJson:IColumnConfigs): GridColDef[] => {
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
          <Button onClick={() => handleEditClick(params.row as PowerMeasure)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as PowerMeasure).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Power Measure</Button>
      <DataGrid rows={powerMeasures} columns={columns}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedPowerMeasure ? 'Edit Power Measure' : 'Add Power Measure'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Unit"
            type="text"
            fullWidth
            value={formValues.unit}
            onChange={(e) => setFormValues({ ...formValues, unit: e.target.value })}
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

export default PowerMeasureDataGrid;
