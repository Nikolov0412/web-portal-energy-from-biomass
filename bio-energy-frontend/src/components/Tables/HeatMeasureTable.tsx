import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getHeatMeasures, createHeatMeasure, updateHeatMeasure, deleteHeatMeasure } from '../../services/heatmeasureService';
import tableConfig from '../table-configs/heatmeasure-table.json';
import { IColumnConfigs } from '../../models/ITableConfig';
import { HeatMeasure, HeatMeasureDTO } from '../../models/IMeasure';


const HeatMeasureDataGrid: React.FC = () => {
  const [heatMeasures, setHeatMeasures] = useState<HeatMeasure[]>([]);
  const [selectedHeatMeasure, setSelectedHeatMeasure] = useState<HeatMeasure | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<HeatMeasureDTO>({
    unit: '',
    description: ''
  });

  useEffect(() => {
    fetchHeatMeasures();
  }, []);

  const fetchHeatMeasures = async () => {
    try {
      const response = await getHeatMeasures();
      setHeatMeasures(response.data);
    } catch (error) {
      console.error('Failed to fetch heat measures', error);
    }
  };

  const handleAddClick = () => {
    setSelectedHeatMeasure(null);
    setFormValues({
      unit: '',
      description: ''
    });
    setOpen(true);
  };

  const handleEditClick = (heatMeasure: HeatMeasure) => {
    setSelectedHeatMeasure(heatMeasure);
    setFormValues({
      unit: heatMeasure.unit,
      description: heatMeasure.description
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteHeatMeasure(id);
      fetchHeatMeasures();
    } catch (error) {
      console.error('Failed to delete heat measure', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedHeatMeasure) {
        await updateHeatMeasure(selectedHeatMeasure.id, formValues);
      } else {
        await createHeatMeasure(formValues);
      }
      fetchHeatMeasures();
      handleClose();
    } catch (error) {
      console.error('Failed to save heat measure', error);
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
          <Button onClick={() => handleEditClick(params.row as HeatMeasure)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as HeatMeasure).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Heat Measure</Button>
      <DataGrid rows={heatMeasures} columns={columns}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedHeatMeasure ? 'Edit Heat Measure' : 'Add Heat Measure'}</DialogTitle>
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

export default HeatMeasureDataGrid;
